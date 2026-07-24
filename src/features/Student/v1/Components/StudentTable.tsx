import useStudentStore from "../../../Course/v1/store/student.store";
import { StudentRow } from "./StudentRow";

export function StudentTable() {
  const students = useStudentStore((state) => state.students);

  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-zinc-800 p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-semibold text-white">Student List</h2>

          <span className="rounded-md border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            {students.length} Results
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900">
            Export PDF
          </button>

          <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900">
            Export Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="max-h-[650px] overflow-y-auto">
          <table className="w-full min-w-[1100px]">
            <thead className="sticky top-0 z-20 bg-zinc-900">
              <tr>
                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase text-zinc-400">
                  ID Number
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase text-zinc-400">
                  Student Name
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase text-zinc-400">
                  Date Of Birth
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase text-zinc-400">
                  Contact
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase text-zinc-400">
                  Fee Paid
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-center text-xs font-semibold uppercase text-zinc-400">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {students.length > 0 ? (
                students.map((student) => <StudentRow key={student._id} student={student} />)
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-zinc-500">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-zinc-800 p-4 text-sm text-zinc-400">
        <p>
          Showing <span className="font-medium text-white">{students.length}</span> student
          {students.length !== 1 ? "s" : ""}
        </p>
      </div>
    </section>
  );
}
