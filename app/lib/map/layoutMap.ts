export const layoutClasses = new Map<string, string>([
  // Aspect Ratio
  ["aspect-auto", "ar-auto"],
  ["aspect-square", "ar-s"],
  ["aspect-video", "ar-l"],

  // Container
  ["container", "cnt"],

  // Columns
  ["columns-1", "cols-1"],
  ["columns-2", "cols-2"],
  ["columns-3", "cols-3"],
  ["columns-4", "cols-4"],
  ["columns-5", "cols-5"],
  ["columns-6", "cols-6"],
  ["columns-7", "cols-7"],
  ["columns-8", "cols-8"],
  ["columns-9", "cols-9"],
  ["columns-10", "cols-10"],
  ["columns-11", "cols-11"],
  ["columns-12", "cols-12"],
  ["columns-auto", "cols-auto"],
  ["hidden", "d-0"],

  // Box Sizing
  ["box-border", "bs-bb"],
  ["box-content", "bs-cb"],

  // Display
  ["block", "d-b"],
  ["inline-block", "d-ib"],
  ["inline", "d-i"],
  ["flex", "d-f"],
  ["object-0", "of-0"],
  ["inline-flex", "d-if"],
  ["table", "d-t"],
  ["inline-table", "d-it"],
  ["flow-root", "d-fr"],
  ["grid", "d-g"],
  ["inline-grid", "d-ig"],

  // Float
  ["float-start", "flo-is"],
  ["float-end", "flo-ie"],
  ["float-right", "flo-r"],
  ["float-left", "flo-l"],

  // Object Fit
  ["object-cover", "of-c"],
  ["object-fill", "of-f"],
  ["object-scale-down", "of-sd"],

  // Position Position
  ["object-bottom", "op-b"],
  ["object-center", "op-c"],
  ["object-left", "op-l"],
  ["object-left-bottom", "op-lb"],
  ["object-left-top", "op-lt"],
  ["object-right", "op-r"],
  ["object-right-bottom", "op-rb"],
  ["object-right-top", "op-rt"],
  ["object-top", "op-t"],

  // Overflow
  ["overflow-auto", "ovf-auto"],
  ["overflow-hidden", "ovf-h"],
  ["overflow-clip", "ovf-c"],
  ["overflow-visible", "ovf-v"],
  ["overflow-scroll", "ovf-s"],
  ["overflow-x-auto", "ovf-x-auto"],
  ["overflow-y-auto", "ovf-y-auto"],
  ["overflow-x-hidden", "ovf-x-h"],
  ["overflow-y-hidden", "ovf-y-h"],
  ["overflow-x-clip", "ovf-x-c"],
  ["overflow-y-clip", "ovf-y-c"],
  ["overflow-x-visible", "ovf-x-v"],
  ["overflow-y-visible", "ovf-y-v"],
  ["overflow-x-scroll", "ovf-x-s"],
  ["overflow-y-scroll", "ovf-y-s"],

  // Position
  ["static", "p-s"],
  ["fixed", "p-f"],
  ["absolute", "p-a"],
  ["relative", "p-r"],
  ["sticky", "p-st"],

  // Top / Right / Bottom / Left
  ["bottom-0", "dir-l-0"],
  ["bottom-1", "dir-l-1"],
  ["bottom-2", "dir-l-2"],
  ["bottom-3", "dir-l-3"],
  ["bottom-4", "dir-l-4"],
  ["bottom-5", "dir-l-5"],
  ["bottom-6", "dir-l-6"],
  ["bottom-7", "dir-l-7"],
  ["bottom-8", "dir-l-8"],
  ["bottom-9", "dir-l-9"],
  ["bottom-10", "dir-l-10"],
  ["bottom-11", "dir-l-11"],
  ["bottom-12", "dir-l-12"],
  ["bottom-13", "dir-l-13"],
  ["bottom-14", "dir-l-14"],
  ["bottom-15", "dir-l-15"],
  ["bottom-16", "dir-l-16"],
  ["inset-0", "dir-i-0"],
  ["inset-1", "dir-i-1"],
  ["inset-2", "dir-i-2"],
  ["inset-3", "dir-i-3"],
  ["inset-4", "dir-i-4"],
  ["inset-5", "dir-i-5"],
  ["inset-6", "dir-i-6"],
  ["inset-7", "dir-i-7"],
  ["inset-8", "dir-i-8"],
  ["inset-9", "dir-i-9"],
  ["inset-10", "dir-i-10"],
  ["inset-11", "dir-i-11"],
  ["inset-12", "dir-i-12"],
  ["inset-13", "dir-i-13"],
  ["inset-14", "dir-i-14"],
  ["inset-15", "dir-i-15"],
  ["inset-16", "dir-i-16"],
  ["left-0", "dir-l-0"],
  ["left-1", "dir-l-1"],
  ["left-2", "dir-l-2"],
  ["left-3", "dir-l-3"],
  ["left-4", "dir-l-4"],
  ["left-5", "dir-l-5"],
  ["left-6", "dir-l-6"],
  ["left-7", "dir-l-7"],
  ["left-8", "dir-l-8"],
  ["left-9", "dir-l-9"],
  ["left-10", "dir-l-10"],
  ["left-11", "dir-l-11"],
  ["left-12", "dir-l-12"],
  ["left-13", "dir-l-13"],
  ["left-14", "dir-l-14"],
  ["left-15", "dir-l-15"],
  ["left-16", "dir-l-16"],
  ["right-0", "dir-r-0"],
  ["right-1", "dir-r-1"],
  ["right-2", "dir-r-2"],
  ["right-3", "dir-r-3"],
  ["right-4", "dir-r-4"],
  ["right-5", "dir-r-5"],
  ["right-6", "dir-r-6"],
  ["right-7", "dir-r-7"],
  ["right-8", "dir-r-8"],
  ["right-9", "dir-r-9"],
  ["right-10", "dir-r-10"],
  ["right-11", "dir-r-11"],
  ["right-12", "dir-r-12"],
  ["right-13", "dir-r-13"],
  ["right-14", "dir-r-14"],
  ["right-15", "dir-r-15"],
  ["right-16", "dir-r-16"],
  ["top-0", "dir-t-0"],
  ["top-1", "dir-t-1"],
  ["top-2", "dir-t-2"],
  ["top-3", "dir-t-3"],
  ["top-4", "dir-t-4"],
  ["top-5", "dir-t-5"],
  ["top-6", "dir-t-6"],
  ["top-7", "dir-t-7"],
  ["top-8", "dir-t-8"],
  ["top-9", "dir-t-9"],
  ["top-10", "dir-t-10"],
  ["top-11", "dir-t-11"],
  ["top-12", "dir-t-12"],
  ["top-13", "dir-t-13"],
  ["top-14", "dir-t-14"],
  ["top-15", "dir-t-15"],
  ["top-16", "dir-t-16"],

  // Z-Index
  ["z-0", "zi-0"],
  ["z-10", "zi-10"],
  ["z-20", "zi-20"],
  ["z-30", "zi-30"],
  ["z-40", "zi-40"],
  ["z-50", "zi-50"],
  ["z-auto", "zi-auto"],
]);
