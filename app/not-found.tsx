import Link from "next/link";

export default function NotFound() {
  return (
    <section className="ai-c d-f jc-c lg:mx-56 min-h-1/1 mx-10">
      <div className="ta-c">
        <h1 className="fs-lg fw-700 tc-white">404</h1>
        <p className="fs-sm fw-300 tc-white">This page could not be found.</p>
        <p className="b-1 bc-d-lead-4 bg-d-lead-6 my-4 px-5 py-2 rad-1 s-x-6 tc-silver">
          <Link href="/">Go back home</Link>
        </p>
      </div>
    </section>
  );
}
