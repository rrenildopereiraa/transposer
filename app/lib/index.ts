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
  { title: "Background", code: backgroundUtils },
  { title: "Border", code: borderUtils },
  { title: "Effects", code: effectUtils },
  { title: "Filters", code: filterUtils },
  { title: "Flexbox", code: flexboxUtils },
  { title: "Grid", code: gridUtils },
  { title: "Interactivity", code: interactivityUtils },
  { title: "Layout", code: layoutUtils },
  { title: "Outline", code: outlineUtils },
  { title: "Sizing", code: sizingUtils },
  { title: "Spacing", code: spacingUtils },
  { title: "Tables", code: tableUtils },
  { title: "Typography", code: typographyUtils },
  { title: "Modifiers", code: modifierUtils },
];
