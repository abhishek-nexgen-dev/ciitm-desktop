import StudentSearch from "./ui/StudentSearch";
import FinanceStatCard from "./ui/FinanceStatCard";
import StudentProfileCard from "./ui/StudentProfileCard";
import FeeProgressCard from "./ui/FeeProgressCard";
import PaymentForm from "./ui/PaymentForm";
import FeeBreakdownCard from "./ui/FeeBreakdownCard";
import PaymentTimeline from "./ui/PaymentTimeline";
import {
  Banknote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  CircleDollarSign,
  BadgePercent,
  ReceiptText,
} from "lucide-react";
import { PAYMENT_SUMMARY_METRICS } from "./config/payment.config";

const summaryIconMap = [Wallet, CircleDollarSign, BadgePercent, ReceiptText];

const PaymentPage = () => {
  return (
    <main className="min-h-screen  px-4 py-5 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <section className="overflow-hidden rounded-[2.25rem] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
                <Sparkles size={14} /> Finance command center
              </div>

              <div>
                <h1 className="text-xl font-semibold tracking-tight text-white sm:text-5xl">
                  Streamlined fee management, simplified.
                </h1>

                <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                  Manage student fees with ease - track payments, monitor progress, and ensure
                  timely collections all in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <StudentSearch />

        <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            <StudentProfileCard />

            <div className="grid gap-4 sm:grid-cols-2">
              {PAYMENT_SUMMARY_METRICS.map((metric, index) => {
                const Icon = summaryIconMap[index] ?? Wallet;

                return (
                  <FinanceStatCard
                    key={metric.title}
                    title={metric.title}
                    value={metric.value}
                    tone={metric.tone}
                    icon={Icon}
                  />
                );
              })}
            </div>

            <FeeProgressCard />
          </div>

          <div className="space-y-6">
            <PaymentForm />
            <FeeBreakdownCard />
            <PaymentTimeline />
          </div>
        </section>
      </div>
    </main>
  );
};

export default PaymentPage;
