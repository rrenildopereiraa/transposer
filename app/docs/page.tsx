import { allUtils } from "../lib";

export default function Docs() {
  return (
    <main className="mx-10 sm:mx-56 mt-12">
      <h1 className="fs-md fw-700 tc-white">Documentation</h1>
      <p className="fs-sm fw-400 tc-white">
        See how it works under the hood with our mappings.
      </p>

      {allUtils.map(({ title, code }, i) => (
        <section key={i} className="b-1 bc-d-lead-4 bg-black mt-6 pt-3">
          <h2 className="fs-sm ta-c fw-600 mb-4 tc-white">{title} utilities</h2>
          <div className="ovf-h bt-1 bc-d-lead-4">
            <table className="w-full bc-c ta-l fs-b tc-l-silver-6">
              <thead className="bg-black">
                <tr>
                  <th scope="col" className="px-6 py-4 fw-500 tc-white">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-4 fw-500 tc-white">
                    Tailwind utility
                  </th>
                  <th scope="col" className="px-6 py-4 fw-500 tc-white">
                    Yumma utility
                  </th>
                </tr>
              </thead>
              <tbody className="bt-1 bc-d-lead-4">
                {Array.from(code.entries()).map(([tw, yumma], j) => (
                  <tr key={j}>
                    <th className="px-6 py-4 fw-500 tc-white">{title}</th>
                    <td className="px-6 py-4 ff-m">{tw}</td>
                    <td className="px-6 py-4 ff-m">{yumma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </main>
  );
}
