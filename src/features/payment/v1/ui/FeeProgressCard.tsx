import { memo } from "react";

function FeeProgressCard() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-violet-300/80">
            Collection progress
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">Fee collection progress</h3>
        </div>

        <span className="rounded-full bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-200 ring-1 ring-inset ring-violet-400/20">
          5.9%
        </span>
      </div>

      <div className="mt-6">
        <div className="flex h-4 overflow-hidden rounded-full bg-white/5 ring-1 ring-inset ring-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 shadow-[0_0_30px_rgba(139,92,246,0.35)]"
            style={{ width: "5.9%" }}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-300">
        <span>₹10,030 collected</span>
        <span>₹170,000 total</span>
      </div>
    </section>
  );
}

export default memo(FeeProgressCard);
