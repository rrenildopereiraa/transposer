import React, { useState } from "react";
import { toast } from "sonner";
import { convertUtils } from "../util/convertor";
import { ArrowLeftRight, ArrowRightLeft, Copy } from "lucide-react";

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
    const newDirection = !isReverse;
    setIsReverse(newDirection);
    setOut(convertUtils(inp, newDirection));
    toast.success(`Output set to ${newDirection ? "Tailwind" : "Yumma"}`);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(out)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch(() => {
        toast.error("Something went wrong...");
      });
  };

  return (
    <div className="h-1/1">
      <div className="d-f jc-fs s-x-2 mt-14">
        <button className="b-1 bc-d-lead-3 bg-d-lead-6 p-2 rad-1" onClick={toggleDirection}>
          {isReverse ? <ArrowRightLeft className="dim-4 tc-white" /> : <ArrowLeftRight className="dim-4 tc-white" />}
        </button>
        <button className="b-1 bc-d-lead-3 bg-d-lead-6 p-2 rad-1" onClick={handleCopy}>
          <Copy className="dim-4 tc-white" />
        </button>
      </div>
      <div className="ai-c d-f fd-c g-4 jc-c md:fd-r mt-4">
        <textarea
          className="c-d b-1 bc-d-lead-4 bg-d-lead-6 h-100 pl-4 pt-3 r-none rad-1 tc-white w-full"
          placeholder={isReverse ? "Write Yumma" : "Write Tailwind"}
          value={inp}
          spellCheck={false}
          onChange={handleInputChange}></textarea>
        <textarea
          className="c-d b-1 bc-d-lead-4 bg-d-lead-6 h-100 pl-4 pt-3 r-none rad-1 tc-white w-full"
          placeholder="..."
          value={out}
          spellCheck={false}
          readOnly></textarea>
      </div>
    </div>
  );
}

export default Transposer;
