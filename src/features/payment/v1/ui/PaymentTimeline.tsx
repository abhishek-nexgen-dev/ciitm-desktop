import { memo } from "react";
import clsx from "clsx";
import { PAYMENT_TIMELINE_ITEMS } from "../config/payment.config";

function PaymentTimeline() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Activity trail</p>
        <h3 className="mt-2 text-xl font-semibold text-white">Payment timeline</h3>
      </div>

      <div className="mt-6 space-y-4">
        {PAYMENT_TIMELINE_ITEMS.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4"
          >
            <div
              className={clsx(
                "mt-1 h-3 w-3 rounded-full",
                item.tone === "success" && "bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.55)]",
                item.tone === "warning" && "bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.5)]",
                item.tone === "muted" && "bg-zinc-500",
              )}
            />

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-medium text-white">{item.label}</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 ring-1 ring-inset ring-white/5">
                  {item.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-zinc-400">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(PaymentTimeline);
