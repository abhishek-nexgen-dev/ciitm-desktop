import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CoursePageHeader() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-[#111111]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Courses / Create New Program
          </p>

          <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Register Academic Program
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate("/course-management")}
            className="flex items-center gap-1.5 h-10 sm:h-11 rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition"
          >
            <ArrowLeft size={15} /> Cancel
          </button>

          <button
            type="submit"
            className="h-10 sm:h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition active:scale-[0.98]"
          >
            Save Course Program
          </button>
        </div>
      </div>
    </header>
  );
}
