export const borderClasses = new Map<string, string>([
  // Border Radius
  ["rounded-none", "rad-0"],
  ["rounded", "rad-1"],
  ["rounded-lg", "rad-2"],
  ["rounded-xl", "rad-3"],
  ["rounded-2xl", "rad-4"],

  // Border Style
  ["border-none", "b-none"],
  ["border-dashed", "b-d"],
  ["border-solid", "b-s"],

  // Border Width
  ["border-0", "b-0"],
  ["border", "b-1"],
  ["border-1", "b-1"],
  ["border-2", "b-2"],
  ["border-3", "b-3"],
  ["border-4", "b-4"],
  ["border-5", "b-5"],
  ["border-6", "b-6"],
  ["border-7", "b-7"],
  ["border-8", "b-8"],

  // Border Bottom Width
  ["border-b-0", "bb-0"],
  ["border-b", "bb-1"],
  ["border-b-1", "bb-1"],
  ["border-b-2", "bb-2"],
  ["border-b-3", "bb-3"],
  ["border-b-4", "bb-4"],
  ["border-b-5", "bb-5"],
  ["border-b-6", "bb-6"],
  ["border-b-7", "bb-7"],
  ["border-b-8", "bb-8"],

  // Border Left Width
  ["border-l-0", "bl-0"],
  ["border-l", "bl-1"],
  ["border-l-1", "bl-1"],
  ["border-l-2", "bl-2"],
  ["border-l-3", "bl-3"],
  ["border-l-4", "bl-4"],
  ["border-l-5", "bl-5"],
  ["border-l-6", "bl-6"],
  ["border-l-7", "bl-7"],
  ["border-l-8", "bl-8"],

  // Border Right Width
  ["border-r-0", "br-0"],
  ["border-r", "br-1"],
  ["border-r-1", "br-1"],
  ["border-r-2", "br-2"],
  ["border-r-3", "br-3"],
  ["border-r-4", "br-4"],
  ["border-r-5", "br-5"],
  ["border-r-6", "br-6"],
  ["border-r-7", "br-7"],
  ["border-r-8", "br-8"],

  // Border Top Width
  ["border-t-0", "bt-0"],
  ["border-t", "bt-1"],
  ["border-t-1", "bt-1"],
  ["border-t-2", "bt-2"],
  ["border-t-3", "bt-3"],
  ["border-t-4", "bt-4"],
  ["border-t-5", "bt-5"],
  ["border-t-6", "bt-6"],
  ["border-t-7", "bt-7"],
  ["border-t-8", "bt-8"],

  // Border Color
  ["border-red-50", "bc-l-red-6"],
  ["border-red-100", "bc-l-red-5"],
  ["border-red-200", "bc-l-red-4"],
  ["border-red-300", "bc-l-red-3"],
  ["border-red-400", "bc-l-red-2"],
  ["border-red-500", "bc-red"],
  ["border-red-600", "bc-d-red-2"],
  ["border-red-700", "bc-d-red-3"],
  ["border-red-800", "bc-d-red-4"],
  ["border-red-900", "bc-d-red-5"],
  ["border-red-950", "bc-d-red-6"],

  ["border-orange-50", "bc-l-orange-6"],
  ["border-orange-100", "bc-l-orange-5"],
  ["border-orange-200", "bc-l-orange-4"],
  ["border-orange-300", "bc-l-orange-3"],
  ["border-orange-400", "bc-l-orange-2"],
  ["border-orange-500", "bc-orange"],
  ["border-orange-600", "bc-d-orange-2"],
  ["border-orange-700", "bc-d-orange-3"],
  ["border-orange-800", "bc-d-orange-4"],
  ["border-orange-900", "bc-d-orange-5"],
  ["border-orange-950", "bc-d-orange-6"],

  ["border-yellow-50", "bc-l-yellow-6"],
  ["border-yellow-100", "bc-l-yellow-5"],
  ["border-yellow-200", "bc-l-yellow-4"],
  ["border-yellow-300", "bc-l-yellow-3"],
  ["border-yellow-400", "bc-l-yellow-2"],
  ["border-yellow-500", "bc-yellow"],
  ["border-yellow-600", "bc-d-yellow-2"],
  ["border-yellow-700", "bc-d-yellow-3"],
  ["border-yellow-800", "bc-d-yellow-4"],
  ["border-yellow-900", "bc-d-yellow-5"],
  ["border-yellow-950", "bc-d-yellow-6"],

  ["border-green-50", "bc-l-green-6"],
  ["border-green-100", "bc-l-green-5"],
  ["border-green-200", "bc-l-green-4"],
  ["border-green-300", "bc-l-green-3"],
  ["border-green-400", "bc-l-green-2"],
  ["border-green-500", "bc-green"],
  ["border-green-600", "bc-d-green-2"],
  ["border-green-700", "bc-d-green-3"],
  ["border-green-800", "bc-d-green-4"],
  ["border-green-900", "bc-d-green-5"],
  ["border-green-950", "bc-d-green-6"],

  ["border-teal-50", "bc-l-teal-6"],
  ["border-teal-100", "bc-l-teal-5"],
  ["border-teal-200", "bc-l-teal-4"],
  ["border-teal-300", "bc-l-teal-3"],
  ["border-teal-400", "bc-l-teal-2"],
  ["border-teal-500", "bc-teal"],
  ["border-teal-600", "bc-d-teal-2"],
  ["border-teal-700", "bc-d-teal-3"],
  ["border-teal-800", "bc-d-teal-4"],
  ["border-teal-900", "bc-d-teal-5"],
  ["border-teal-950", "bc-d-teal-6"],

  ["border-cyan-50", "bc-l-cyan-6"],
  ["border-cyan-100", "bc-l-cyan-5"],
  ["border-cyan-200", "bc-l-cyan-4"],
  ["border-cyan-300", "bc-l-cyan-3"],
  ["border-cyan-400", "bc-l-cyan-2"],
  ["border-cyan-500", "bc-cyan"],
  ["border-cyan-600", "bc-d-cyan-2"],
  ["border-cyan-700", "bc-d-cyan-3"],
  ["border-cyan-800", "bc-d-cyan-4"],
  ["border-cyan-900", "bc-d-cyan-5"],
  ["border-cyan-950", "bc-d-cyan-6"],

  ["border-blue-50", "bc-l-blue-6"],
  ["border-blue-100", "bc-l-blue-5"],
  ["border-blue-200", "bc-l-blue-4"],
  ["border-blue-300", "bc-l-blue-3"],
  ["border-blue-400", "bc-l-blue-2"],
  ["border-blue-500", "bc-blue"],
  ["border-blue-600", "bc-d-blue-2"],
  ["border-blue-700", "bc-d-blue-3"],
  ["border-blue-800", "bc-d-blue-4"],
  ["border-blue-900", "bc-d-blue-5"],
  ["border-blue-950", "bc-d-blue-6"],

  ["border-indigo-50", "bc-l-indigo-6"],
  ["border-indigo-100", "bc-l-indigo-5"],
  ["border-indigo-200", "bc-l-indigo-4"],
  ["border-indigo-300", "bc-l-indigo-3"],
  ["border-indigo-400", "bc-l-indigo-2"],
  ["border-indigo-500", "bc-indigo"],
  ["border-indigo-600", "bc-d-indigo-2"],
  ["border-indigo-700", "bc-d-indigo-3"],
  ["border-indigo-800", "bc-d-indigo-4"],
  ["border-indigo-900", "bc-d-indigo-5"],
  ["border-indigo-950", "bc-d-indigo-6"],

  ["border-violet-50", "bc-l-violet-6"],
  ["border-violet-100", "bc-l-violet-5"],
  ["border-violet-200", "bc-l-violet-4"],
  ["border-violet-300", "bc-l-violet-3"],
  ["border-violet-400", "bc-l-violet-2"],
  ["border-violet-500", "bc-violet"],
  ["border-violet-600", "bc-d-violet-2"],
  ["border-violet-700", "bc-d-violet-3"],
  ["border-violet-800", "bc-d-violet-4"],
  ["border-violet-900", "bc-d-violet-5"],
  ["border-violet-950", "bc-d-violet-6"],

  ["border-pink-50", "bc-l-pink-6"],
  ["border-pink-100", "bc-l-pink-5"],
  ["border-pink-200", "bc-l-pink-4"],
  ["border-pink-300", "bc-l-pink-3"],
  ["border-pink-400", "bc-l-pink-2"],
  ["border-pink-500", "bc-pink"],
  ["border-pink-600", "bc-d-pink-2"],
  ["border-pink-700", "bc-d-pink-3"],
  ["border-pink-800", "bc-d-pink-4"],
  ["border-pink-900", "bc-d-pink-5"],
  ["border-pink-950", "bc-d-pink-6"],

  ["border-gray-50", "bc-l-gray-6"],
  ["border-gray-100", "bc-l-gray-5"],
  ["border-gray-200", "bc-l-gray-4"],
  ["border-gray-300", "bc-l-gray-3"],
  ["border-gray-400", "bc-l-gray-2"],
  ["border-gray-500", "bc-gray"],
  ["border-gray-600", "bc-d-gray-2"],
  ["border-gray-700", "bc-d-gray-3"],
  ["border-gray-800", "bc-d-gray-4"],
  ["border-gray-900", "bc-d-gray-5"],
  ["border-gray-950", "bc-d-gray-6"],
]);
