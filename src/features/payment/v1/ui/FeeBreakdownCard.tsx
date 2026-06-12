import { memo } from "react";
import clsx from "clsx";
import { PAYMENT_FEE_ITEMS } from "../config/payment.config";

function FeeBreakdownCard() {
  const total = PAYMENT_FEE_ITEMS.reduce((sum, item) => sum + item.share, 0);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Fee structure</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Fee breakdown</h3>
        </div>

        <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300 ring-1 ring-inset ring-white/5">
          {total}% covered
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {PAYMENT_FEE_ITEMS.map((item) => (
          <div
            key={item.name}
            className="space-y-2 rounded-2xl border border-white/5 bg-black/20 p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-zinc-500">{item.value}</p>
              </div>

              <span className="text-sm text-zinc-300">{item.share}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <div
                className={clsx(
                  "h-full rounded-full",
                  item.tone === "violet" && "bg-violet-400",
                  item.tone === "emerald" && "bg-emerald-400",
                  item.tone === "amber" && "bg-amber-400",
                  item.tone === "sky" && "bg-sky-400",
                )}
                style={{ width: `${item.share}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(FeeBreakdownCard);
