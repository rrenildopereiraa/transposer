import { allClasses } from "../lib/index";

export function transposeClasses(inp: string): string {
  let out = inp;

  const sortedClasses = allClasses
    .flatMap(({ classes }) => [...classes.entries()])
    .sort(([a], [b]) => b.length - a.length);

  sortedClasses.forEach(([tailwindClass, yummaClass]) => {
    const regex = new RegExp(`\\b${tailwindClass}(\\d+)?\\b`, "g");
    out = out.replace(regex, (_, num) => yummaClass + (num || ""));
  });

  return out;
}
