"use client";

import { toast } from "sonner";
import { transposeClasses } from "./util/transposer";
import React, { useState } from "react";

export default function Home() {
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
        toast.error("Something went wrong! Please contact the author");
      });
  };

  return (
    <header className="mx-10 sm:mx-56">
      <div className="mt-12">
        <h1 className="fs-md fw-700 tc-white">Build Tailwind output Yumma</h1>
        <p className="fs-sm fw-400 tc-white">
          Transposer will convert Tailwind to Yumma CSS.
        </p>
      </div>
      <div className="fd-c g-6 ins mt-12 sm:fd-r">
        {!isConverted && (
          <textarea
            className=""
            placeholder="Tailwind CSS"
            value={inp}
            onChange={(e) => setInp(e.target.value)}></textarea>
        )}
        <textarea
          className="b-1 bc-d-lead-4 bg-black c-d h-100 pl-4 pt-3 r-none rad-1 tc-white w-full"
          placeholder="Yumma CSS"
          value={out}
          readOnly></textarea>
      </div>
      <div className="ins">
        <button
          className=""
          onClick={isConverted ? handleCopy : handleTransform}>
          {isConverted ? "Copy" : "Transpose"}
        </button>
      </div>
    </header>
  );
}
