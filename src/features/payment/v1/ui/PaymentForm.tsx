import { memo, useCallback, useId, useMemo, useState } from "react";
import { CreditCard, Landmark, Send } from "lucide-react";
import { FEE_TYPES, PAYMENT_METHODS } from "../config/payment.config";

type FeeType = (typeof FEE_TYPES)[number];
type PaymentMethod = (typeof PAYMENT_METHODS)[number];

function PaymentForm() {
  const feeTypeId = useId();
  const paymentMethodId = useId();
  const amountId = useId();
  const notesId = useId();

  const [feeType, setFeeType] = useState<FeeType>(FEE_TYPES[0]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PAYMENT_METHODS[0]);
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  const isSubmitDisabled = useMemo(() => amount.trim().length === 0, [amount]);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-violet-300/80">Payment action</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Collect payment</h3>
        </div>

        <div className="hidden rounded-2xl border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-sm text-violet-200 md:flex md:items-center md:gap-2">
          <CreditCard size={16} /> Secure collection
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor={feeTypeId} className="text-sm text-zinc-300">
            Fee type
          </label>
          <select
            id={feeTypeId}
            value={feeType}
            onChange={(event) => setFeeType(event.target.value as FeeType)}
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-400/10"
          >
            {FEE_TYPES.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor={paymentMethodId} className="text-sm text-zinc-300">
            Payment method
          </label>
          <select
            id={paymentMethodId}
            value={paymentMethod}
            onChange={(event) => setPaymentMethod(event.target.value as PaymentMethod)}
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-400/10"
          >
            {PAYMENT_METHODS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={amountId} className="text-sm text-zinc-300">
              Amount
            </label>
            <input
              id={amountId}
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              inputMode="decimal"
              placeholder="₹0.00"
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-400/10"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor={notesId} className="text-sm text-zinc-300">
              Notes
            </label>
            <textarea
              id={notesId}
              rows={4}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Internal remarks"
              className="min-h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-400/10"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-violet-500 to-indigo-500 px-5 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-400 hover:to-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send size={16} /> Collect payment
        </button>

        <button
          type="button"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/3 px-5 font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/6"
        >
          <Landmark size={16} /> Save draft
        </button>
      </div>
    </form>
  );
}

export default memo(PaymentForm);
