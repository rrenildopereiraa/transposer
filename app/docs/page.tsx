import { allClasses } from "../lib";

export default function Docs() {
  return (
    <main className="mx-10 sm:mx-56 mt-12">
      <h1 className="fs-md fw-700 tc-white">Transposer Documentation</h1>
      <p className="fs-sm fw-400 tc-white">
        Here are the mappings from Tailwind CSS to Yumma CSS.
      </p>

      {allClasses.map(({ title, classes }, i) => (
        <section
          key={i}
          className="b-1 bc-d-lead-4 bg-black mt-8 p-4 pt-3 rad-1">
          <h2 className="fs-md fw-600 mb-4 tc-white">{title}</h2>
          <ul className="ff-m lst-d pl-5 s-y-3">
            {Array.from(classes.entries()).map(
              ([tailwindClass, yummaClass], i) => (
                <li key={i} className="">
                  <strong className="tc-white">{tailwindClass}</strong>{" "}
                  <span className="tc-white">→</span>{" "}
                  <span className="tc-l-silver-2">{yummaClass}</span>
                </li>
              )
            )}
          </ul>
        </section>
      ))}
    </main>
  );
}
