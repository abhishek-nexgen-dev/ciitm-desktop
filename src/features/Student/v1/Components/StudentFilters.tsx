import { Filter } from "lucide-react";

export function StudentFilters() {
  return (
    <div
      className="
      rounded-xl
      border
      border-zinc-800
      bg-zinc-950
      p-4
    "
    >
      <div className="grid gap-4 lg:grid-cols-5">
        <Select label="Department" />
        <Select label="Year" />
        <Select label="Status" />
        <Select label="Fee Status" />

        <button
          className="
          flex
          items-center
          justify-center
          rounded-lg
          border
          border-zinc-700
        "
        >
          <Filter size={18} />
        </button>
      </div>
    </div>
  );
}

function Select({ label }: { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs text-zinc-500">{label}</label>

      <select
        className="
        h-11
        w-full
        rounded-lg
        border
        border-zinc-700
        bg-zinc-900
        px-3
      "
      >
        <option>All</option>
      </select>
    </div>
  );
}
