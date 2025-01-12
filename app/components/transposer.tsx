import { toast } from "sonner";
import { transposeClasses } from "../util/convertor";
import React, { useState } from "react";

function Transposer() {
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
    toast.success("Your code has been converted!");
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
      <div className="fd-c g-6 ai-c d-f jc-c mt-12 md:fd-r">
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
      <div className="ai-c d-f jc-c">
        <button
          className="b-1 bc-d-lead-4 bg-d-lead-6 tc-silver  px-5 py-2 my-4 rad-1 s-x-6"
          onClick={isConverted ? handleCopy : handleTransform}>
          {isConverted ? "Copy" : "Transpose"}
        </button>
      </div>
    </div>
  );
}

export default Transposer;
