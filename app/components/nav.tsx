const Nav = () => {
  return (
    <>
      <nav className="bg-black">
        <ul className="bb-1 bc-d-lead-4 ml-6 py-6">
          <div className="ai-e d-f s-x-6">
            <li className="fw-700 tc-white">
              <a href="https://transposer.vercel.app/">Transposer</a>
            </li>
            <li className="fw-400 h:tc-white tc-l-silver-1">
              <a href="https://github.com/rrenildopereiraa/transposer/wiki">
                Docs
              </a>
            </li>
            <li className="fw-400 h:tc-white tc-l-silver-1">
              <a href="https://github.com/rrenildopereiraa/transposer">
                GitHub
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
