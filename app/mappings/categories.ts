import { backgroundMap } from "./background";
import { borderMap } from "./border";
import { effectMap } from "./effect";
import { filterMap } from "./filter";
import { flexboxMap } from "./flexbox";
import { gridMap } from "./grid";
import { interactivityMap } from "./interactivity";
import { layoutMap } from "./layout";
import { modifierMap } from "./modifier";
import { outlineMap } from "./outline";
import { sizingMap } from "./sizing";
import { spacingMap } from "./spacing";
import { tableMap } from "./table";
import { typographyMap } from "./typography";

export const categoryDescriptions: Record<string, string> = {
  Background: "Utilities to control element colors, images, and gradients.",
  Border: "Utilities to control element borders, radius, and dividing lines.",
  Effect: "Utilities to control visual effects like shadows and opacity.",
  Filter: "Utilities to control visual filters like blur and grayscale.",
  Flexbox: "Utilities to control one-dimensional flexible box layouts.",
  Grid: "Utilities to control two-dimensional grid-based layouts.",
  Interactivity: "Utilities to control user interaction states and behaviors.",
  Layout: "Utilities to control element positioning and display.",
  Modifier: "Utilities to control utility modifiers and state variations.",
  Outline: "Utilities to control element outlines separate from borders.",
  Sizing: "Utilities to control width, height and dimensions.",
  Spacing: "Utilities to control margins, padding, and space between elements.",
  Table: "Utilities to control table-specific layouts and presentations.",
  Typography: "Utilities to control text styling, fonts, and layout.",
};

// Helper type for conversion items
type ConversionItem = {
  tailwind: string;
  yumma: string;
};

// Group conversions by category
function createConversionItems(map: Record<string, string>): ConversionItem[] {
  return Object.entries(map).map(([tailwind, yumma]) => ({
    tailwind,
    yumma,
  }));
}

export const groupedConversions: Record<string, ConversionItem[]> = {
  Background: createConversionItems(backgroundMap),
  Border: createConversionItems(borderMap),
  Effect: createConversionItems(effectMap),
  Filter: createConversionItems(filterMap),
  Flexbox: createConversionItems(flexboxMap),
  Grid: createConversionItems(gridMap),
  Interactivity: createConversionItems(interactivityMap),
  Layout: createConversionItems(layoutMap),
  Modifier: createConversionItems(modifierMap),
  Outline: createConversionItems(outlineMap),
  Sizing: createConversionItems(sizingMap),
  Spacing: createConversionItems(spacingMap),
  Table: createConversionItems(tableMap),
  Typography: createConversionItems(typographyMap),
};
