import { Book } from "lucide-react";

export default function Header({ onShowDocs }: { onShowDocs: () => void }) {
  return (
    <div className="sy-2 ta-c">
      <div className="ai-c d-f g-2 jc-c">
        <h1 className="fs-3xl fw-400 tc-silver-12">Transposer</h1>
        <span className="ai-c bg-green-2 cg-1 d-if fs-xs fw-500 px-2 py-1 rad-1 tc-green-6">
          Beta
        </span>
      </div>
      <p className="tc-silver-9">Simplify your framework migrations right now!</p>
      <button
        onClick={onShowDocs}
        className="ai-c d-if fs-sm g-2 h:tc-green-8 mt-2 tc-green">
        <Book className="d-4" />
        Available Conversions
      </button>
    </div>
  );
}
