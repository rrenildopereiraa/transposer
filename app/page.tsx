"use client";

import React from "react";
import Transposer from "./components/transposer";

export default function Home() {
  return (
    <header className="mx-10 min-h-1/1 lg:mx-56">
      <div className="mt-12">
        <h1 className="fs-md fw-700 tc-white">Build Tailwind output Yumma</h1>
        <p className="fs-sm fw-400 tc-white">
          Transposer will convert Tailwind to Yumma CSS
        </p>
      </div>
      <Transposer />
    </header>
  );
}
