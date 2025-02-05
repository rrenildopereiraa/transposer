"use client";

import { AnimatePresence } from "framer-motion";
import { categoryDescriptions, groupedConversions } from "./mappings/categories";
import { convertToYumma, convertToTailwind } from "./mappings";
import { useState, useMemo } from "react";
import ConverterPanel from "./components/ConverterPanel";
import DocumentationModal from "./components/DocumentationModal";
import Header from "./components/Header";

export default function Home() {
  const [twValue, setTwValue] = useState("");
  const [ymaValue, setYmaValue] = useState("");
  const [isTwToYma, setIsTwToYma] = useState(true);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [expandedCats, setExpandedCats] = useState<string[]>([]);

  const onInputChange = (value: string) => {
    if (isTwToYma) {
      setTwValue(value);
      setYmaValue(convertToYumma(value));
    } else {
      setYmaValue(value);
      setTwValue(convertToTailwind(value));
    }
  };

  const switchMode = () => setIsTwToYma(!isTwToYma);
  const toggleCat = (cat: string) => {
    setExpandedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    if (!query) return groupedConversions;
    const q = query.toLowerCase();
    const result: typeof groupedConversions = {};

    Object.entries(groupedConversions).forEach(([cat, items]) => {
      const matches = items.filter(
        (item) =>
          item.tailwind.toLowerCase().includes(q) ||
          item.yumma.toLowerCase().includes(q)
      );
      if (matches.length) result[cat] = matches;
    });

    return result;
  }, [query]);

  return (
    <div className="ai-c d-f jc-c min-h-1/1 p-6">
      <div className="b-1 bc-silver-1 bg-white bs-xs max-w-112 p-8 rad-2 sy-8 w-full">
        <Header onShowDocs={() => setIsDocsOpen(true)} />

        <ConverterPanel
          isTwToYma={isTwToYma}
          onSwitch={switchMode}
          currentInput={isTwToYma ? twValue : ymaValue}
          currentOutput={isTwToYma ? ymaValue : twValue}
          onInputChange={onInputChange}
        />
      </div>

      <AnimatePresence>
        {isDocsOpen && (
          <DocumentationModal
            isOpen={isDocsOpen}
            onClose={() => setIsDocsOpen(false)}
            query={query}
            onSearch={setQuery}
            conversions={filtered}
            expandedCats={expandedCats}
            onToggleCat={toggleCat}
            descriptions={categoryDescriptions}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
