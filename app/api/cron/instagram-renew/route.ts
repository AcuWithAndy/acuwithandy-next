import { timingSafeEqual } from "node:crypto";
import { renewInstagramToken } from "@/lib/instagram-token";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const supplied = Buffer.from(request.headers.get("authorization") || "");
  const expected = Buffer.from(`Bearer ${secret || ""}`);
  const headers = { "Cache-Control": "no-store" };
  if (!secret || secret.length < 32 || supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return Response.json({ error: "Unauthorized" }, { status: 401, headers });
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return Response.json({ error: "Production only" }, { status: 403, headers });
  try {
    return Response.json(await renewInstagramToken(), { headers });
  } catch {
    // Intentionally omit raw exceptions and tokens from responses and logs.
    console.error("Instagram renewal failed. Check storage configuration and account authorization.");
    return Response.json({ error: "Instagram renewal failed; check storage and account connection." }, { status: 503, headers });
  }
}
