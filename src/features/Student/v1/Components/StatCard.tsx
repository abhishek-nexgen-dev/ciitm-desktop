

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="min-w-[100px] rounded-lg border border-zinc-800 bg-zinc-950 p-4">
      <p className="text-xs uppercase text-zinc-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}


export default StatCard;