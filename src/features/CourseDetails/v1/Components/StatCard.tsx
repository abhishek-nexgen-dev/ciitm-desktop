interface Props {
  label: string;
  value: string;
}

export default function StatCard({ label, value }: Props) {
  return (
    <div className="rounded-xl bg-zinc-900 p-4">
      <h3 className="text-xl font-bold text-white">{value}</h3>

      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </div>
  );
}
