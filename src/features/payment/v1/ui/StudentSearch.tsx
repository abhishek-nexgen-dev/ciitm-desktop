import { useCallback, useId, useState } from "react";
import { CheckCircle2, Search, ScanText } from "lucide-react";

function StudentSearch() {
  const inputId = useId();
  const [studentId, setStudentId] = useState("CIITM_906953");

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-emerald-300/80">Student lookup</p>
          <label htmlFor={inputId} className="mt-2 block text-sm text-zinc-300">
            Search by student ID
          </label>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          <CheckCircle2 size={14} /> Verified profile found
        </span>
      </div>

      <div className="mt-4 flex gap-3">
        <div className="relative flex-1">
          <Search
            size={18}
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            id={inputId}
            value={studentId}
            onChange={(event) => setStudentId(event.target.value)}
            autoComplete="off"
            spellCheck={false}
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-11 text-lg text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/10"
          />

          <CheckCircle2
            aria-hidden="true"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400"
          />
        </div>

        <button
          type="submit"
          className="inline-flex h-14 items-center gap-2 rounded-2xl bg-emerald-500 px-5 font-semibold text-black transition hover:bg-emerald-400"
        >
          <ScanText size={18} />
          Search
        </button>
      </div>

      <p className="mt-3 text-sm text-zinc-500">
        Current selection: <span className="text-zinc-300">{studentId}</span>
      </p>
    </form>
  );
}

export default StudentSearch;
