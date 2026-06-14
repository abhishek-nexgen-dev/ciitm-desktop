import { ChevronDown } from "lucide-react";

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  error?: string;
}

export function SelectField({ label, options, error, className = "", ...props }: SelectFieldProps) {
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

      <div className="relative">
        <select
          {...props}
          className={`
            h-12
            w-full
            appearance-none
            rounded-lg
            border
            border-zinc-800
            bg-zinc-950
            px-4
            pr-10
            text-sm
            text-zinc-100
            outline-none
            transition-all
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            ${error ? "border-red-500" : ""}
            ${className}
          `}
        >
          <option value="">Select an option</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-zinc-500
          "
        />
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
