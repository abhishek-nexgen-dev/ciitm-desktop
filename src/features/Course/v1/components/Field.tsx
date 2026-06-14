interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Field({ label, error, className = "", ...props }: FieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={props.id}
        className="
          block
          text-xs
          uppercase
          tracking-[0.2em]
          text-zinc-500
        "
      >
        {label}
      </label>

      <input
        {...props}
        className={`
          h-12
          w-full
          rounded-lg
          border
          border-zinc-800
          bg-zinc-950
          px-4
          text-sm
          text-zinc-100
          placeholder:text-zinc-600
          outline-none
          transition-all
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          ${error ? "border-red-500" : ""}
          ${className}
        `}
      />

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
