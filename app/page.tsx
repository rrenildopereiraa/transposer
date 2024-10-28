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
    <header className="mx-10 sm:mx-56">
      <div className="mt-12">
        <h1 className="fs-md fw-700 tc-white">Build Tailwind output Yumma</h1>
        <p className="fs-sm fw-400 tc-white">Transposer will convert Tailwind to Yumma CSS.</p>
      </div>
      <div className="fd-c g-6 ins mt-12 sm:fd-r">
        <textarea
          className="b-1 bc-d-lead-4 bg-black h-100 pl-4 pt-3 r-none rad-1 tc-white w-full"
          placeholder="Tailwind CSS"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        ></textarea>
        <textarea
          className="b-1 bc-d-lead-4 bg-black c-na h-100 pl-4 pt-3 r-none rad-1 tc-white w-full"
          placeholder="Yumma CSS"
          value={out}
          readOnly
        ></textarea>
      </div>
      <div className="ins">
        <button className="bg-white fw-600 h:bg-l-silver-6 mt-6 px-4 py-2 rad-1 tc-black w-100" onClick={handleTransform}>
          Transpose
        </button>
      </div>
    </header>
  );
}
