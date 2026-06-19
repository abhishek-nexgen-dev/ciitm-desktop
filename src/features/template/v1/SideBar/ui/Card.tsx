import clsx from "clsx";

interface Props {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className }: Props) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-slate-800 bg-[#0E131D]",
        "p-5 shadow-sm",
        className,
      )}
    >
      {title && <h3 className="mb-5 text-xs uppercase tracking-wider text-slate-400">{title}</h3>}

      {children}
    </div>
  );
}
