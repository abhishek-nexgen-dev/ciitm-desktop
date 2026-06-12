import { Student } from "../Types/student.types";
import { StudentRow } from "./StudentRow";

const students: Student[] = [
  {
    id: "CIT-2023-0451",
    name: "Aditya Sharma",
    email: "aditya@ciitm.edu.in",
    avatar: "https://i.pravatar.cc/150?img=1",
    course: "B.Tech - CSE",
    department: "Engineering",
    semester: "SEM V",
    attendance: 88,
    feeStatus: "Paid",
  },
  {
    id: "CIT-2023-0452",
    name: "Priya Kumari",
    email: "priya@ciitm.edu.in",
    avatar: "https://i.pravatar.cc/150?img=2",
    course: "MBA Finance",
    department: "Management",
    semester: "SEM III",
    attendance: 72,
    feeStatus: "Partial",
  },
  {
    id: "CIT-2023-0453",
    name: "Rohan Verma",
    email: "rohan@ciitm.edu.in",
    avatar: "https://i.pravatar.cc/150?img=3",
    course: "B.Tech ME",
    department: "Engineering",
    semester: "SEM VII",
    attendance: 55,
    feeStatus: "Overdue",
  },
];

export function StudentTable() {
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
          <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:bg-zinc-900">
            Export PDF
          </button>

          <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:bg-zinc-900">
            Export Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="max-h-[650px] overflow-y-auto">
          <table className="w-full min-w-[1100px]">
            <thead className="sticky top-0 z-20">
              <tr className="bg-zinc-900">
                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  ID Number
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Student Name
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Course / Dept
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Semester
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Attendance
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Fee Status
                </th>

                <th className="border-b border-zinc-800 px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <StudentRow key={student.id} student={student} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 border-t border-zinc-800 p-4 text-sm text-zinc-400 lg:flex-row lg:items-center lg:justify-between">
        <p>
          Showing <span className="font-medium text-white">1-{students.length}</span> of{" "}
          <span className="font-medium text-white">4,208</span> entries
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <button className="h-9 w-9 rounded-md border border-zinc-700 transition hover:bg-zinc-800">
            ←
          </button>

          <button className="h-9 w-9 rounded-md bg-blue-600 text-white">1</button>

          <button className="h-9 w-9 rounded-md border border-zinc-700 transition hover:bg-zinc-800">
            2
          </button>

          <button className="h-9 w-9 rounded-md border border-zinc-700 transition hover:bg-zinc-800">
            3
          </button>

          <span className="px-1">...</span>

          <button className="h-9 rounded-md border border-zinc-700 px-3 transition hover:bg-zinc-800">
            421
          </button>

          <button className="h-9 w-9 rounded-md border border-zinc-700 transition hover:bg-zinc-800">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
