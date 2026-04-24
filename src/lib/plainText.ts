import type { Document } from "@contentful/rich-text-types";

/** Minimal plain text from Contentful rich text for index previews */
export function plainTextFromDocument(doc: Document | null | undefined): string {
  if (!doc?.content || !Array.isArray(doc.content)) return "";

  function walk(nodes: unknown[]): string {
    const parts: string[] = [];
    for (const node of nodes) {
      const n = node as {
        nodeType?: string;
        value?: string;
        content?: unknown[];
      };
      if (n.nodeType === "text" && typeof n.value === "string") {
        parts.push(n.value);
      }
      if (Array.isArray(n.content)) {
        parts.push(walk(n.content));
      }
    }
    return parts.join(" ");
  }

  return walk(doc.content as unknown[]).replace(/\s+/g, " ").trim();
}
