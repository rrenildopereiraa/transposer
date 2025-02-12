// TypeScript
import { allUtils } from "../lib/index";

export function convertUtils(inp: string, reverse: boolean = false): string {
  let out = inp;

  const sortedUtils = allUtils
    .flatMap(({ code }) => [...code.entries()])
    .sort(([a], [b]) => b.length - a.length);

  if (reverse) {
    sortedUtils.forEach(([tw, yumma]) => {
      const regex = new RegExp(`\\b${yumma}(\\d+)?\\b`, "g");
      out = out.replace(regex, (_, num) => tw + (num || ""));
    });
  } else {
    sortedUtils.forEach(([tw, yumma]) => {
      const regex = new RegExp(`\\b${tw}(\\d+)?\\b`, "g");
      out = out.replace(regex, (_, num) => yumma + (num || ""));
    });
  }

  return out;
}
