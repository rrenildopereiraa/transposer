import { categoryDescriptions, groupedConversions } from "../mappings/categories";
import { motion } from "framer-motion";
import { X, Search } from "lucide-react";
import CategoryItem from "./CategoryItem";

export default function DocumentationModal({
  // isOpen,
  onClose,
  query,
  onSearch,
  conversions,
  expandedCats,
  onToggleCat,
  descriptions,
}: {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onSearch: (value: string) => void;
  conversions: typeof groupedConversions;
  expandedCats: string[];
  onToggleCat: (cat: string) => void;
  descriptions: typeof categoryDescriptions;
}) {
  return (
    <motion.div
      className="ai-c bf-b-xs d-f i-0 jc-c p-4 p-f zi-50"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}>
      <div className="b-1 bc-silver-2 bg-white bs-xs max-w-168 max-h-80v ovf-h rad-2 w-full">
        <div className="ai-fs bb-1 bc-silver-4 d-f jc-sb p-6">
          <div>
            <h2 className="fs-xxl fw-400 tc-silver-12">Conversions</h2>
            <p className="mt-1 tc-silver-9">
              Browse all available class conversions.
            </p>
          </div>
          <button onClick={onClose} className="h:tc-red-7 tc-red-6">
            <X className="d-6" />
          </button>
        </div>

        <div className="bb-1 bc-silver-4 p-6">
          <div className="p-r">
            <Search className="d-5 fs-b l-3 p-a t-full t-y-135p tc-silver-9" />
            <input
              type="text"
              placeholder="Search conversions..."
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              className="b-1 bc-silver-4 pl-10 pr-4 py-2 rad-2 w-full"
            />
          </div>
        </div>

        <div className="max-h-200px ovf-y-auto">
          <div className="p-6 sy-6">
            {Object.entries(conversions).map(([cat, items]) => (
              <CategoryItem
                key={cat}
                cat={cat}
                items={items}
                isExpanded={expandedCats.includes(cat)}
                onToggle={() => onToggleCat(cat)}
                description={descriptions[cat]}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
