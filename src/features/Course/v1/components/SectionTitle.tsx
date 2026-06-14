interface Props {
  number: string;
  title: string;
}

export function SectionTitle({ number, title }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-300">
        {number}
      </div>

      <h2 className="text-xs uppercase tracking-[0.35em] text-zinc-400">{title}</h2>
    </div>
  );
}
