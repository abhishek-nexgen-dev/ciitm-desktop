import { UserPlus } from "lucide-react";

export function StudentHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-4xl font-bold">Student Directory</h1>

        <p className="mt-2 text-zinc-400">
          Manage academic records and enrollment for 4,208 students.
        </p>
      </div>

      <button
        className="
        flex
        items-center
        gap-2
        rounded-lg
        bg-blue-600
        px-5
        py-3
        font-medium
        hover:bg-blue-700
      "
      >
        <UserPlus size={18} />
        Register Student
      </button>
    </div>
  );
}
