import { allClasses } from "../lib/index";

export function transposeClasses(inp: string): string {
  let out = inp;

  allClasses.forEach((map) => {
    for (const [tailwindClass, yummaClass] of map.entries()) {
      const regex = new RegExp(`\\b${tailwindClass}(\\d+)?\\b`, "g");
      out = out.replace(regex, (_, num) => yummaClass + (num || ""));
    }
  });

  return out;
}
