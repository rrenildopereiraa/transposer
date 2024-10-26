import { knowledgeBase } from "../lib";

export function transposeClasses(inp: string): string {
  let out = inp;
  
  for (const classGroup of Object.values(knowledgeBase)) {
    
    for (const [tailwindClass, yummaClass] of Object.entries(classGroup)) {
      const regex = new RegExp(`\\b${tailwindClass}\\d*\\b`, "g");
      out = out.replace(regex, yummaClass);
    }
  }

  return out;
}
