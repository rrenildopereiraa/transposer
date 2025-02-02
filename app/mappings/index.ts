import { flexboxMap } from "./flexbox";
import { backgroundMap } from "./background";
import { borderMap } from "./border";
import { effectMap } from "./effect";
import { filterMap } from "./filter";
import { gridMap } from "./grid";
import { interactivityMap } from "./interactivity";
import { layoutMap } from "./layout";
import { modifierMap } from "./modifier";
import { outlineMap } from "./outline";
import { sizingMap } from "./sizing";
import { spacingMap } from "./spacing";
import { tableMap } from "./table";
import { typographyMap } from "./typography";

export const cssMap = {
  ...flexboxMap,
  ...backgroundMap,
  ...borderMap,
  ...effectMap,
  ...filterMap,
  ...gridMap,
  ...interactivityMap,
  ...layoutMap,
  ...modifierMap,
  ...outlineMap,
  ...sizingMap,
  ...spacingMap,
  ...tableMap,
  ...typographyMap,
} as const;

// Create reverse mapping
export const reverseCssMap = Object.entries(cssMap).reduce(
  (acc, [key, value]) => {
    acc[value] = key;
    return acc;
  },
  {} as Record<string, string>
);

// Helper functions
export const convertToYumma = (tailwindClasses: string): string => {
  return tailwindClasses
    .trim()
    .split(/\s+/)
    .map((cls) => cssMap[cls as keyof typeof cssMap] || cls)
    .join(" ");
};

export const convertToTailwind = (yummaClasses: string): string => {
  return yummaClasses
    .trim()
    .split(/\s+/)
    .map((cls) => reverseCssMap[cls] || cls)
    .join(" ");
};
