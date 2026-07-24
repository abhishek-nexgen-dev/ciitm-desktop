import { useState } from "react";
import { Filter } from "lucide-react";
import useStudentStore from "../../../Course/v1/store/student.store";
import api from "../../../../Utils/api.utils";

interface StudentFiltersProps {
  semesters: number[];
  courses: string[];
}

export function StudentFilters({ semesters, courses }: StudentFiltersProps) {
  const setStudents = useStudentStore((state) => state.setStudents);

  const [semester, setSemester] = useState<number>(semesters[0] ?? 1);
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);

  const searchStudents = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/api/v1/Student/FindByCourseAndSemester", {
        params: {
          course,
          semester,
          PerPage: 1,
          Limit: 20,
        },
      });

      if (data.success) {
        setStudents(data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Course */}
        <div>
          <label className="mb-2 block text-xs text-zinc-500">Course</label>

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3"
          >
            <option value="">Select Course</option>

            {courses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Semester */}
        <div>
          <label className="mb-2 block text-xs text-zinc-500">Semester</label>

          <select
            value={semester}
            onChange={(e) => setSemester(Number(e.target.value))}
            className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3"
          >
            {semesters.map((item) => (
              <option key={item} value={item}>
                Semester {item}
              </option>
            ))}
          </select>
        </div>

        {/* Search */}
        <button
          onClick={searchStudents}
          disabled={loading}
          className="mt-6 flex h-11 items-center justify-center rounded-lg border border-zinc-700 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
        >
          <Filter size={18} />

          <span className="ml-2">{loading ? "Searching..." : "Search"}</span>
        </button>
      </div>
    </div>
  );
}
