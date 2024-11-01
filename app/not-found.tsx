import Link from "next/link";

export default function NotFound() {
  return (
    <section className="ins lg:mx-56 min-h-1/1 mx-10">
      <div className="ta-c">
        <h1 className=" fs-md fw-700 tc-white">404</h1>
        <p className="fs-sm fw-400 tc-white">This page is not real.</p>
        <p className="bg-white fw-600 h:bg-l-silver-6 mt-6 px-4 py-2 rad-1 tc-black w-100">
          <Link href="/">Go back home</Link>
        </p>
      </div>
    </section>
  );
}
