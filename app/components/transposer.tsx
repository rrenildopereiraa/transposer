import React, { useState } from "react";
import { toast } from "sonner";
import { convertUtils } from "../util/convertor";

function Transposer() {
  const [inp, setInp] = useState("");
  const [out, setOut] = useState("");
  const [isReverse, setIsReverse] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInp(value);
    const converted = convertUtils(value, isReverse);
    setOut(converted);
  };

  const toggleDirection = () => {
    setIsReverse((prev) => {
      const newDirection = !prev;
      setOut(convertUtils(inp, newDirection));
      return newDirection;
    });
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(out)
      .then(() => {
        toast.success("Your code has been copied!");
      })
      .catch(() => {
        toast.error("Copy failed. Please try again.");
      });
  };

  return (
    <div>
      <div className="fd-c g-6 ai-c d-f jc-c mt-12 md:fd-r">
        <textarea
          className="b-1 bc-d-lead-4 bg-d-lead-6 c-d h-100 pl-4 pt-3 r-none rad-1 tc-white w-full"
          placeholder={isReverse ? "Yumma CSS" : "Tailwind CSS"}
          value={inp}
          spellCheck={false}
          onChange={handleInputChange}></textarea>
        <textarea
          className="b-1 bc-d-lead-4 bg-d-lead-6 c-d h-100 pl-4 pt-3 r-none rad-1 tc-white w-full"
          placeholder={isReverse ? "Tailwind CSS" : "Yumma CSS"}
          value={out}
          spellCheck={false}
          readOnly></textarea>
      </div>
      <div className="ai-c d-f jc-c s-x-2">
        <button
          className="b-1 bc-d-lead-4 bg-d-lead-6 tc-silver px-5 py-2 my-4 rad-1 s-x-6"
          onClick={toggleDirection}>
          Switch to {isReverse ? "Yumma" : "Tailwind"}
        </button>
        <button
          className="b-1 bc-d-lead-4 bg-d-lead-6 tc-silver px-5 py-2 my-4 rad-1 s-x-6"
          onClick={handleCopy}>
          Copy
        </button>
      </div>
    </div>
  );
}

export default Transposer;
