import { allUtils } from "../lib/index";

export function convertUtils(inp: string, reverse: boolean = false): string {
  return inp.replace(/(class(?:Name)?=")([^"]*)(")/g, (_, start, classes, end) => {
    let newClasses = classes;
    const sortedUtils = allUtils.flatMap(({ code }) => [...code.entries()]).sort(([a], [b]) => b.length - a.length);

    if (reverse) {
      sortedUtils.forEach(([tw, yumma]) => {
        const regex = new RegExp(`\\b${yumma}(\\d+)?\\b`, "g");
        newClasses = newClasses.replace(regex, (_, num) => tw + (num || ""));
      });
    } else {
      sortedUtils.forEach(([tw, yumma]) => {
        const regex = new RegExp(`\\b${tw}(\\d+)?\\b`, "g");
        newClasses = newClasses.replace(regex, (_, num) => yumma + (num || ""));
      });
    }
    return start + newClasses + end;
  });
}
