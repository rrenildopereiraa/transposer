"use client";

import { toast } from "sonner";
import { transposeClasses } from "../util/transposer";
import React, { useState } from "react";

function Transpose() {
  const [inp, setInp] = useState("");
  const [out, setOut] = useState("");
  const [isConverted, setIsConverted] = useState(false);

  const handleTransform = () => {
    if (!inp.trim()) {
      toast.error("Please provide a valid Tailwind class.");
      return;
    }

    const transposedOut = transposeClasses(inp);
    setOut(transposedOut);
    toast.success("Thanks for using Yumma CSS! To copy the code, just click.");
    setIsConverted(true);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(out)
      .then(() => {
        toast.success("Your code has been copied!");
      })
      .catch(() => {
        toast.error(
          "There was a hiccup. If this keeps happening, please create a GitHub issue."
        );
      });
  };

  return (
    <div>
      <div className="fd-c g-6 ins mt-12 md:fd-r">
        <textarea
          className="b-1 bc-d-lead-4 bg-d-lead-6 c-d h-100 pl-4 pt-3 r-none rad-1 tc-white w-full"
          placeholder="Tailwind CSS"
          value={inp}
          spellCheck={false}
          onChange={(e) => setInp(e.target.value)}></textarea>
        <textarea
          className="b-1 bc-d-lead-4 bg-d-lead-6 c-d h-100 pl-4 pt-3 r-none rad-1 tc-white w-full"
          placeholder="Yumma CSS"
          value={out}
          spellCheck={false}
          readOnly></textarea>
      </div>
      <div className="ins">
        <button
          className="bg-white fw-600 h:bg-l-silver-6 mt-6 px-4 py-2 rad-1 tc-black w-100"
          onClick={isConverted ? handleCopy : handleTransform}>
          {isConverted ? "Copy" : "Transpose"}
        </button>
      </div>
    </div>
  );
}

export default Transpose;