import type { ChalkSpec } from "./types";

const VALID_ELEMENT_TYPES = new Set([
  "point",
  "segment",
  "line",
  "circle",
  "polygon",
  "angle",
  "functiongraph",
  "text",
  "arc",
]);

/**
 * Parse and validate a raw JSON string into a ChalkSpec.
 * Returns null if the input is malformed or fails validation.
 */
export function parseChalkSpec(raw: string): ChalkSpec | null {
  try {
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed.viewport) || parsed.viewport.length !== 4) {
      return null;
    }
    if (
      !parsed.viewport.every(
        (v: unknown) => typeof v === "number" && isFinite(v)
      )
    ) {
      return null;
    }

    if (!Array.isArray(parsed.elements)) {
      return null;
    }

    const validElements = parsed.elements.filter(
      (el: { type?: string }) =>
        el && typeof el.type === "string" && VALID_ELEMENT_TYPES.has(el.type)
    );

    return {
      viewport: parsed.viewport,
      elements: validElements,
      showAxis: parsed.showAxis !== false,
      showGrid: parsed.showGrid ?? false,
    };
  } catch {
    return null;
  }
}
