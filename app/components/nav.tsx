import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="bg-black">
        <ul className="bb-1 bc-d-lead-4 ml-6 py-6">
          <div className="ai-e d-f s-x-6">
            <li className="fw-700 tc-white">
              <Link href={"https://transposer.vercel.app/"}>Transposer</Link>
            </li>
            <li className="fw-400 h:tc-white tc-l-silver-1">
              <Link
                href={"https://github.com/rrenildopereiraa/transposer/wiki"}>
                Docs
              </Link>
            </li>
            <li className="fw-400 h:tc-white tc-l-silver-1">
              <Link href={"https://github.com/rrenildopereiraa/transposer/"}>
                GitHub
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
