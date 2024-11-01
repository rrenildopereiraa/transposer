"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-black">
      <ul className="bb-1 bc-d-lead-4 ml-6 py-6">
        <div className="ai-e d-f s-x-6">
          <li className="fw-700 tc-white">
            <Link href="https://transposer.vercel.app/">Transposer</Link>
          </li>
          <li
            className={`fw-400 ${
              pathname === "/" ? "tc-white" : "tc-l-silver-1"
            } h:tc-white`}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={`fw-400 ${
              pathname === "/docs" ? "tc-white" : "tc-l-silver-1"
            } h:tc-white`}>
            <Link href="/docs">Docs</Link>
          </li>
          <li className="fw-400 h:tc-white tc-l-silver-1">
            <Link href="https://play.yummacss.com">
              Playground
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
