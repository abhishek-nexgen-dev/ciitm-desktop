function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase text-zinc-500">{label}</p>

      <p className="mt-2 text-zinc-200">{value}</p>
    </div>
  );
}

export default Info;
