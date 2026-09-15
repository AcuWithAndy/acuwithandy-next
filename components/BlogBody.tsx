import { Fragment, type ReactNode } from "react";
import { safeLink, type Block, type BlogContent } from "@/lib/blog";

export default function BlogBody({ body = [] }: { body: BlogContent[] }) {
  function content(block: Block) {
    return block.children.map(span => {
      let text: ReactNode = span.text;
      for (const mark of span.marks || []) {
        if (mark === "strong") text = <strong>{text}</strong>;
        else if (mark === "em") text = <em>{text}</em>;
        else {
          const link = block.markDefs?.find(def => def._key === mark);
          const href = link && safeLink(link.href);
          if (href) text = <a href={href}>{text}</a>;
        }
      }
      return <Fragment key={span._key}>{text}</Fragment>;
    });
  }
  const nodes: ReactNode[] = [];
  for (let i = 0; i < body.length; i++) {
    const block = body[i];
    if (block._type === "image") {
      if (block.url?.startsWith("https://cdn.sanity.io/images/")) nodes.push(<figure key={block._key} className="blog-inline-figure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={block.url} alt={block.alt || ""} loading="lazy" className="blog-inline-image" />
      </figure>);
      continue;
    }
    if (block._type !== "block") continue;
    if (block.listItem) {
      const kind = block.listItem;
      const items: ReactNode[] = [<li key={block._key}>{content(block)}</li>];
      while (body[i + 1]?.listItem === kind) {
        const next = body[++i];
        if (next._type === "block") items.push(<li key={next._key}>{content(next)}</li>);
      }
      nodes.push(kind === "number" ? <ol key={block._key}>{items}</ol> : <ul key={block._key}>{items}</ul>);
    } else if (block.style === "h2") nodes.push(<h2 key={block._key}>{content(block)}</h2>);
    else if (block.style === "h3") nodes.push(<h3 key={block._key}>{content(block)}</h3>);
    else if (block.style === "blockquote") nodes.push(<blockquote key={block._key}>{content(block)}</blockquote>);
    else nodes.push(<p key={block._key}>{content(block)}</p>);
  }
  return <div className="blog-prose">{nodes}</div>;
}
