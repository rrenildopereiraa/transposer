import { backgroundUtils } from "./mappings/backgroundUtils";
import { borderUtils } from "./mappings/borderUtils";
import { effectUtils } from "./mappings/effectUtils";
import { filterUtils } from "./mappings/filterUtils";
import { flexboxUtils } from "./mappings/flexboxUtils";
import { gridUtils } from "./mappings/gridUtils";
import { interactivityUtils } from "./mappings/interactivityUtils";
import { layoutUtils } from "./mappings/layoutUtils";
import { outlineUtils } from "./mappings/outlineUtils";
import { sizingUtils } from "./mappings/sizingUtils";
import { spacingUtils } from "./mappings/spacingUtils";
import { tableUtils } from "./mappings/tableUtils";
import { typographyUtils } from "./mappings/typographyUtils";
import { modifierUtils } from "./mappings/modifierUtils";

export const allUtils = [
  { title: "Background", utils: backgroundUtils },
  { title: "Border", utils: borderUtils },
  { title: "Effects", utils: effectUtils },
  { title: "Filters", utils: filterUtils },
  { title: "Flexbox", utils: flexboxUtils },
  { title: "Grid", utils: gridUtils },
  { title: "Interactivity", utils: interactivityUtils },
  { title: "Layout", utils: layoutUtils },
  { title: "Outline", utils: outlineUtils },
  { title: "Sizing", utils: sizingUtils },
  { title: "Spacing", utils: spacingUtils },
  { title: "Tables", utils: tableUtils },
  { title: "Typography", utils: typographyUtils },
  { title: "Modifiers", utils: modifierUtils },
];
