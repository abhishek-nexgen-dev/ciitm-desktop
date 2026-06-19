import { Trash2 } from "lucide-react";

export function CoursePageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#111111]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Courses / Create New Course
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">Register Academic Program</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="h-12 rounded-lg border border-zinc-700 px-6 text-zinc-300">
            Cancel
          </button>

          <button className="flex h-12 items-center gap-2 rounded-lg bg-red-700 px-6 text-white">
            <Trash2 size={16} />
            Delete Draft
          </button>

          <button type="submit" className="h-12 rounded-lg bg-blue-500 px-6 font-medium text-black">
            Save Course
          </button>
        </div>
      </div>
    </header>
  );
}
