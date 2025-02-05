export default function CategoryItem({
  cat,
  items,
  isExpanded,
  onToggle,
  description,
}: {
  cat: string;
  items: { tailwind: string; yumma: string }[];
  isExpanded: boolean;
  onToggle: () => void;
  description?: string;
}) {
  return (
    <div className="b-1 bc-silver-4 p-4 rad-2 sy-3">
      <button onClick={onToggle} className="ai-c d-f jc-sb ta-l w-full">
        <h3 className="fw-600 h:tc-green-7 tc-green sy-3">{cat}</h3>
        <span className="fs-sm tc-silver-9">{items.length} conversions</span>
      </button>

      {description && <p className="fs-sm mx-2 tc-silver-8">{description}</p>}

      {isExpanded && (
        <div className="mx-3 sx-3">
          <div className="d-g fs-sm g-4 gtc-2">
            <div className="fw-600 tc-silver-10">Tailwind CSS v3</div>
            <div className="fw-600 tc-silver-10">Yumma CSS v2</div>
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className="d-g fs-sm g-4 gtc-2 h:bc-silver-1 py-2 rad-2">
              <div className="tc-silver-9">{item.tailwind}</div>
              <div className="tc-silver-9">{item.yumma}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
