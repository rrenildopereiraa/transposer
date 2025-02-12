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
            <Link href="/">Transposer</Link>
          </li>
          <li
            className={`fw-400 ${
              pathname === "/docs" ? "tc-white" : "tc-l-silver-1"
            } h:tc-white`}>
            <Link href="/docs">Reference</Link>
          </li>
          <li
            className={`fw-400 ${
              pathname === "/docs" ? "tc-white" : "tc-l-silver-1"
            } h:tc-white`}>
            <Link href="/docs">GitHub</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
