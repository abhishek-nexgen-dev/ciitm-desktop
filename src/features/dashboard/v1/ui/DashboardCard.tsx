import clsx from "clsx";

type DashboardCardProps = {
  isActive: boolean;
  title: string;
  value: string;
  logo: React.ReactNode;
  range: [number, number];
};

export default function DashboardCard({ isActive, title, value, logo, range }: DashboardCardProps) {
  return (
    <div
      className={clsx(
        `relative
        overflow-hidden
        rounded-3xl
        border border-zinc-800
        bg-[#0d0d10]
        lg:w-[23%]
        p-6
        transition-all
        duration-300
        hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]`,
        isActive ? "border-white" : "text-zinc-400",
      )}
    >
      <div className="absolute right-5 top-5 opacity-[0.08] text-white">{logo}</div>

      <div className="space-y-2">
        <p className="text-sm text-zinc-500 font-medium">{title}</p>

        <div className="flex items-end gap-3">
          <h2 className="text-3xl font-bold text-white tracking-tight">{value}</h2>
        </div>
      </div>

      {/* Growth Text */}
      <p className="mt-2 text-zinc-400 text-sm">Compared to last fiscal year</p>

      {/* Progress */}
      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="text-xs text-zinc-500">Target Progress</span>

          <span className="text-xs text-indigo-300">{range[0]}%</span>
        </div>

        <div className="h-2 rounded-full bg-zinc-800 overflow-hidden flex">
          <input
            type="range"
            min={0}
            max={range[1]}
            value={range[0]}
            readOnly
            className="w-full h-full cursor-default "
          />
        </div>
      </div>
    </div>
  );
}
