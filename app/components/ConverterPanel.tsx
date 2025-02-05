import { ArrowDownUp } from "lucide-react";

export default function ConverterPanel({
  isTwToYma,
  onSwitch,
  currentInput,
  currentOutput,
  onInputChange,
}: {
  isTwToYma: boolean;
  onSwitch: () => void;
  currentInput: string;
  currentOutput: string;
  onInputChange: (value: string) => void;
}) {
  return (
    <div className="sy-6">
      <div className="sy-2">
        <div className="ai-c d-f jc-sb">
          <label className="d-b fs-sm fw-600 tc-silver-10">
            {isTwToYma ? "Tailwind CSS v3" : "Yumma CSS v2"}
          </label>
          <button
            onClick={onSwitch}
            className="ai-c d-f fs-sm g-1 h:tc-green-8 tc-green">
            <ArrowDownUp className="d-4" />
            Switch Mode
          </button>
        </div>
        <textarea
          rows={6}
          value={currentInput}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={isTwToYma ? "e.g., justify-items-center" : "e.g., ji-c"}
          className="b-1 bc-silver-4 fs-b px-4 py-3 r-v rad-2 w-full"
        />
      </div>

      <div className="sy-2">
        <label className="d-b fs-sm fw-600 tc-silver-10">
          {isTwToYma ? "Yumma CSS v2" : "Tailwind CSS v3"}
        </label>
        <div className="b-1 bc-silver-1 bc-silver-3 px-4 py-3 rad-2 w-full">
          <p className="fw-500 ow-bw tc-silver">{currentOutput || "Empty"}</p>
        </div>
      </div>
    </div>
  );
}
