"use client";

import { useState, useMemo } from "react";
import { ArrowDownUp, Book, Search, X } from "lucide-react";
import { convertToYumma, convertToTailwind } from "./mappings";
import { categoryDescriptions, groupedConversions } from "./mappings/categories";

export default function Home() {
  const [tailwindValue, setTailwindValue] = useState("");
  const [yummaValue, setYummaValue] = useState("");
  const [isTailwindToYumma, setIsTailwindToYumma] = useState(true);
  const [showDocs, setShowDocs] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const handleInputChange = (value: string) => {
    if (isTailwindToYumma) {
      setTailwindValue(value);
      setYummaValue(convertToYumma(value));
    } else {
      setYummaValue(value);
      setTailwindValue(convertToTailwind(value));
    }
  };

  const toggleMode = () => {
    setIsTailwindToYumma(!isTailwindToYumma);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const currentInputValue = isTailwindToYumma ? tailwindValue : yummaValue;
  const currentOutputValue = isTailwindToYumma ? yummaValue : tailwindValue;

  const filteredConversions = useMemo(() => {
    if (!searchQuery) return groupedConversions;

    const query = searchQuery.toLowerCase();
    const filtered: typeof groupedConversions = {};

    Object.entries(groupedConversions).forEach(([category, items]) => {
      const matchingItems = items.filter(
        (item) =>
          item.tailwind.toLowerCase().includes(query) ||
          item.yumma.toLowerCase().includes(query)
      );

      if (matchingItems.length > 0) {
        filtered[category] = matchingItems;
      }
    });

    return filtered;
  }, [searchQuery]);

  return (
    <div className="ai-c d-f jc-c min-h-1/1 p-6">
      <div className="b-1 bc-silver-1 bg-white bs-xs max-w-112 p-8 rad-2 sy-8 w-full">
        <div className="sy-2 ta-c">
          <div className="ai-c d-f g-2 jc-c">
            <h1 className="fs-xxl fw-400 tc-silver-12">Transposer Beta</h1>
          </div>
          <p className="tc-silver-9">
            Simplify your framework migrations right now!
          </p>
          <button
            onClick={() => setShowDocs(true)}
            className="ai-c d-if fs-sm g-2 h:tc-green-8 mt-2 tc-green">
            <Book className="d-4" />
            Documentation
          </button>
        </div>

        <div className="sy-6">
          <div className="sy-2">
            <div className="ai-c d-f jc-sb">
              <label className="d-b fs-sm fw-600 tc-silver-10">
                {isTailwindToYumma ? "Tailwind CSS v3" : "Yumma CSS v2"}
              </label>
              <button
                onClick={toggleMode}
                className="ai-c d-f fs-sm g-1 h:tc-green-8 tc-green">
                <ArrowDownUp className="d-4" />
                Switch Mode
              </button>
            </div>
            <textarea
              rows={6}
              value={currentInputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={
                isTailwindToYumma ? "e.g., justify-items-center" : "e.g., ji-c"
              }
              className="b-1 bc-silver-4 px-4 py-3 r-v rad-2 w-full"
            />
          </div>

          <div className="sy-2">
            <label className="d-b fs-sm fw-600 tc-silver-10">
              {isTailwindToYumma ? "Yumma CSS v2" : "Tailwind CSS v3"}
            </label>
            <div className="b-1 bc-silver-1 bc-silver-3 px-4 py-3 rad-2 w-full us-t">
              <p className="fw-500 ow-bw tc-silver">
                {currentOutputValue || "Empty"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Modal */}
      {showDocs && (
        <div className="ai-c bf-b-sm d-f i-0 jc-c p-4 p-f zi-50">
          <div className="b-1 bc-silver-2 bg-white bs-xs max-w-168 max-h-80v ovf-h rad-2 w-full">
            <div className="ai-fs bb-1 bc-silver-4 d-f jc-sb p-6">
              <div>
                <h2 className="fs-xxl fw-400 tc-silver-12">Documentation</h2>
                <p className="mt-1 tc-silver-9">
                  Browse all available class conversions.
                </p>
              </div>
              <button
                onClick={() => setShowDocs(false)}
                className="h:tc-red-7 tc-red-6">
                <X className="d-6" />
              </button>
            </div>

            <div className="bb-1 bc-silver-4 p-6">
              <div className="p-r">
                <Search className="d-5 l-3 p-a t-full t-y-135p tc-silver-9" />
                <input
                  type="text"
                  placeholder="Search conversions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="b-1 bc-silver-4 pl-10 pr-4 py-2 rad-2 w-full"
                />
              </div>
            </div>

            <div className="max-h-200px ovf-y-auto">
              <div className="p-6 sy-6">
                {Object.entries(filteredConversions).map(([category, items]) => (
                  <div key={category} className="b-1 bc-silver-4 p-4 rad-2 sy-3">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="ai-c d-f jc-sb ta-l w-full">
                      <h3 className="fw-600 h:tc-green-7 tc-green sy-3">
                        {category}
                      </h3>
                      <span className="fs-sm tc-silver-9">
                        {items.length} conversions
                      </span>
                    </button>

                    {categoryDescriptions[category] && (
                      <p className="fs-sm mx-2 tc-silver-8">
                        {categoryDescriptions[category]}
                      </p>
                    )}

                    {expandedCategories.includes(category) && (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
