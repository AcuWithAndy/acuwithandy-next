import "server-only";
import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";
import { get } from "node:https";
import { unstable_cache } from "next/cache";

const DAY = 86_400_000;
type TokenState = { token: string; seed: string; refreshedAt: number; expiresAt: number };

function settings() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  const secret = process.env.CRON_SECRET;
  const id = process.env.INSTAGRAM_USER_ID;
  if (!url || !token || !secret || secret.length < 32 || !id || !/^\d+$/.test(id)) return null;
  const parsed = new URL(url);
  if (parsed.protocol !== "https:" || !parsed.hostname.endsWith(".upstash.io") || parsed.username || parsed.password) throw Error("Invalid token storage configuration");
  return { url: parsed.origin, token, secret, key: `instagram:${id}:token:v1` };
}

async function redis(command: (string | number)[]) {
  const config = settings();
  if (!config) throw Error("Token storage is not configured");
  const response = await fetch(config.url, {
    method: "POST", cache: "no-store", redirect: "error",
    headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(command), signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw Error("Token storage request failed");
  const payload = await response.json();
  if (payload.error) throw Error("Token storage command failed");
  return payload.result as unknown;
}

function encryptionKey() {
  const config = settings();
  if (!config) throw Error("Token storage is not configured");
  return createHash("sha256").update(`instagram-token-storage:${config.secret}`).digest();
}

function encrypt(state: TokenState) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", encryptionKey(), iv);
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(state), "utf8"), cipher.final()]);
  return [iv, cipher.getAuthTag(), encrypted].map(part => part.toString("base64")).join(".");
}

function decrypt(value: unknown): TokenState | null {
  if (value === null) return null;
  if (typeof value !== "string") throw Error("Invalid stored token");
  const parts = value.split(".");
  if (parts.length !== 3) throw Error("Invalid stored token");
  const [iv, tag, data] = parts.map(part => Buffer.from(part, "base64"));
  const decipher = createDecipheriv("aes-256-gcm", encryptionKey(), iv);
  decipher.setAuthTag(tag);
  const state = JSON.parse(Buffer.concat([decipher.update(data), decipher.final()]).toString("utf8"));
  if (typeof state.token !== "string" || !state.token || typeof state.seed !== "string" || !Number.isFinite(state.refreshedAt) || !Number.isFinite(state.expiresAt)) throw Error("Invalid stored token");
  return state as TokenState;
}

function seedHash() {
  return createHash("sha256").update(process.env.INSTAGRAM_ACCESS_TOKEN || "").digest("hex");
}

// Cache only the encrypted database value, so the homepage can stay statically cached.
const cachedToken = unstable_cache(async (key: string) => redis(["GET", key]), ["instagram-token-v1"], { revalidate: 300 });

export async function getInstagramAccessToken(): Promise<string | undefined> {
  const seed = process.env.INSTAGRAM_ACCESS_TOKEN;
  try {
    const config = settings();
    if (!config) return seed;
    const state = decrypt(await cachedToken(config.key));
    // Changing the original environment token explicitly reconnects the account.
    return state && state.seed === seedHash() ? state.token : seed;
  } catch {
    console.warn("Instagram token storage unavailable");
    return seed;
  }
}

// Native HTTPS keeps a token-bearing refresh URL out of Next's fetch instrumentation.
function refreshToken(token: string): Promise<{ token: string; expiresIn: number }> {
  const url = new URL("https://graph.instagram.com/refresh_access_token");
  url.searchParams.set("grant_type", "ig_refresh_token");
  url.searchParams.set("access_token", token);
  return new Promise((resolve, reject) => {
    const fail = () => reject(Error("Instagram renewal failed; check the account connection"));
    const request = get(url, { signal: AbortSignal.timeout(10000) }, response => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", chunk => { body += chunk; if (body.length > 65536) { response.destroy(); fail(); } });
      response.on("error", fail);
      response.on("end", () => {
        try {
          if (response.statusCode !== 200) return fail();
          const data = JSON.parse(body);
          if (typeof data.access_token !== "string" || !data.access_token || !Number.isFinite(data.expires_in) || data.expires_in <= 86400) return fail();
          resolve({ token: data.access_token, expiresIn: data.expires_in });
        } catch { fail(); }
      });
    });
    request.on("error", fail);
  });
}

export async function renewInstagramToken() {
  const config = settings();
  const seed = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!config || !seed) throw Error("Configure token storage, CRON_SECRET and Instagram settings first");
  const lockKey = `${config.key}:lock`;
  const owner = randomBytes(16).toString("hex");
  if (await redis(["SET", lockKey, owner, "NX", "EX", 120]) !== "OK") return { status: "already_running" };
  try {
    const state = decrypt(await redis(["GET", config.key]));
    const now = Date.now();
    const sameSeed = state?.seed === seedHash();
    if (state && sameSeed && now - state.refreshedAt < 30 * DAY && state.expiresAt - now > 14 * DAY) return { status: "not_due", expiresAt: new Date(state.expiresAt).toISOString() };
    // A fresh seed may be too young to refresh; failure leaves it intact and retries next day.
    const refreshed = await refreshToken(state && sameSeed ? state.token : seed);
    const next: TokenState = { token: refreshed.token, seed: seedHash(), refreshedAt: now, expiresAt: now + refreshed.expiresIn * 1000 };
    if (await redis(["SET", config.key, encrypt(next)]) !== "OK") throw Error("Could not save renewed Instagram token");
    return { status: "renewed", expiresAt: new Date(next.expiresAt).toISOString() };
  } finally {
    await redis(["EVAL", "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end", 1, lockKey, owner]).catch(() => {});
  }
}
