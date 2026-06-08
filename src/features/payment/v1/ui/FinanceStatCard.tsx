import { memo } from "react";
import clsx from "clsx";
import {
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  type LucideIcon,
} from "lucide-react";

interface Props {
  title: string;
  value: string;
  growth?: string;
  icon?: LucideIcon;
  tone?: "indigo" | "emerald" | "violet" | "amber" | "rose";
  trend?: "up" | "down";
  subtitle?: string;
  metric?: string;
  progress?: number;
}

const toneStyles = {
  indigo: {
    accent: "text-indigo-300",
    chip: "bg-indigo-500/10 text-indigo-300",
    progress: "bg-indigo-400",
    glow: "group-hover:border-indigo-400/30",
  },

  emerald: {
    accent: "text-emerald-300",
    chip: "bg-emerald-500/10 text-emerald-300",
    progress: "bg-emerald-400",
    glow: "group-hover:border-emerald-400/30",
  },

  violet: {
    accent: "text-violet-300",
    chip: "bg-violet-500/10 text-violet-300",
    progress: "bg-violet-400",
    glow: "group-hover:border-violet-400/30",
  },

  amber: {
    accent: "text-amber-300",
    chip: "bg-amber-500/10 text-amber-300",
    progress: "bg-amber-400",
    glow: "group-hover:border-amber-400/30",
  },

  rose: {
    accent: "text-rose-300",
    chip: "bg-rose-500/10 text-rose-300",
    progress: "bg-rose-400",
    glow: "group-hover:border-rose-400/30",
  },
};

function FinanceStatCard({
  title,
  value,
  growth,
  icon: Icon,
  tone = "indigo",
  trend = "up",
  subtitle,
  metric,
  progress,
}: Props) {
  const style = toneStyles[tone];

  return (
    <div
      className={clsx(
        `
        w-full
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#0E0E11]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
      `,
        style.glow
      )}
    >
      {/* Background Icon */}
      {Icon && (
        <Icon
          size={96}
          className="
            absolute
            right-4
            top-4
            text-white/[0.04]
          "
        />
      )}

      {/* Header */}
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            {title}
          </p>

          <h3 className="mt-4 text-5xl font-bold tracking-tight text-white">
            {value}
          </h3>
        </div>

        {growth && (
          <div
            className={clsx(
              "flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium",
              style.chip
            )}
          >
            {trend === "up" ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}

            {growth}
          </div>
        )}
      </div>

      {/* Description */}
      {subtitle && (
        <p className="mt-3 text-sm text-zinc-400">
          {subtitle}
        </p>
      )}

      {/* Progress */}
      {progress !== undefined && (
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-zinc-500">
              Collection Progress
            </span>

            <span className={style.accent}>
              {progress}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div
              className={clsx(
                "h-full rounded-full transition-all",
                style.progress
              )}
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
        <div>
          <p className="text-xs text-zinc-500">
            Status
          </p>

          <p className={clsx("text-sm font-medium", style.accent)}>
            Live Tracking
          </p>
        </div>

        {metric && (
          <div className="text-right">
            <p className="text-xs text-zinc-500">
              Additional Metric
            </p>

            <p className="text-sm font-medium text-white">
              {metric}
            </p>
          </div>
        )}
      </div>

      {/* Corner indicator */}
      <div className="absolute bottom-5 right-5 opacity-20">
        <Activity size={18} className={style.accent} />
      </div>
    </div>
  );
}

export default memo(FinanceStatCard);