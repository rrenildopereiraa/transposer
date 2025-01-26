import { allUtils } from "../lib/index";

export function convertUtils(inp: string): string {
  let out = inp;

  const sortedUtils = allUtils
    .flatMap(({ classes }) => [...classes.entries()])
    .sort(([a], [b]) => b.length - a.length);

  sortedUtils.forEach(([tw, yumma]) => {
    const regex = new RegExp(`\\b${tw}(\\d+)?\\b`, "g");
    out = out.replace(regex, (_, num) => yumma + (num || ""));
  });

  return out;
}
