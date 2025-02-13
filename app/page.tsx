"use client";

import React from "react";
import Transposer from "./components/transposer";

export default function Home() {
  return (
    <header className="mx-10 lg:mx-56">
      <h1 className="fs-md fw-700 tc-white pt-12 ">Transposer</h1>
      <p className="fs-sm fw-400 tc-white">Simplify your framework migrations right now!</p>
      <Transposer />
    </header>
  );
}
