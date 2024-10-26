"use client";

import React, { useState } from "react";
import { transposeClasses } from "./util/transposer";

export default function Home() {
  const [inp, setInp] = useState("");
  const [out, setOut] = useState("");

  const handleTransform = () => {
    const transposedOut = transposeClasses(inp);
    setOut(transposedOut);
  };

  return (
    <header className="mx-56">
      <div className="mt-12">
        <h1 className="fs-md fw-700 tc-white">Build Tailwind output Yumma</h1>
        <p className="fs-sm fw-400 tc-white">Transposer will convert Tailwind to Yumma CSS.</p>
      </div>
      <div className="fd-r g-6 ins mt-12">
        <textarea
          className="b-1 bc-d-lead-4 w-full h-100 rad-1 r-none tc-white"
          placeholder="Tailwind code"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        ></textarea>
        <textarea className="b-1 bc-d-lead-4 w-full h-100 rad-1 r-none tc-white" placeholder="Yumma code" value={out} readOnly></textarea>
      </div>
      <div className="ins">
        <button className="bg-white fw-600 w-full mt-6 px-4 py-2 rad-1 tc-black" onClick={handleTransform}>
          Convert
        </button>
      </div>
    </header>
  );
}
