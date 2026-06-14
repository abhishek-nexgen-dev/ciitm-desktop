function Note({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-zinc-800 p-3">
      <h4 className="text-sm font-medium text-white">{title}</h4>

      <p className="mt-2 text-sm text-zinc-400">{text}</p>
    </div>
  );
}

export default Note;
