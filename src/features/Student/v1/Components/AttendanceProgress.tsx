interface Props {
  value: number;
}

export function AttendanceProgress({ value }: Props) {
  const color = value >= 80 ? "bg-emerald-500" : value >= 60 ? "bg-orange-500" : "bg-red-500";

  return (
    <div className="w-[90px]">
      <div className="h-1.5 rounded bg-zinc-800">
        <div style={{ width: `${value}%` }} className={`h-full rounded ${color}`} />
      </div>

      <p
        className={`mt-1 text-xs ${
          value >= 80 ? "text-emerald-500" : value >= 60 ? "text-orange-500" : "text-red-500"
        }`}
      >
        {value}%
      </p>
    </div>
  );
}
