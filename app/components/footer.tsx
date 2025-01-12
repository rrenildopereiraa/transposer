import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bc-d-lead-4 bg-black bt-1 ml-6 mt-12 py-6">
        <p className="tc-l-silver-4">
          Built by{" "}
          <span className="fw-600 td-u">
            <Link href={"https://github.com/rrenildopereiraa"}>
              Renildo Pereira
            </Link>
          </span>
          . Project available on{" "}
          <span className="fw-600 td-u">
            <Link href={"https://github.com/rrenildopereiraa/transposer"}>
              GitHub
            </Link>
          </span>
          .
        </p>
      </footer>
    </>
  );
};

export default Footer;
