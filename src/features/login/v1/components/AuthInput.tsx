import { Mail } from "lucide-react";

interface Props {
  label: string;
  placeholder: string;
}

export function AuthInput({
  label,
  placeholder,
}: Props) {
  return (
    <div>
      <label
        className="
        mb-2
        block
        text-xs
        uppercase
        tracking-widest
        text-slate-400
      "
      >
        {label}
      </label>

      <div
        className="
        flex
        h-12
        items-center
        rounded-xl
        border
        border-slate-700
        bg-slate-950/40
        px-4
        transition-all
        focus-within:border-indigo-500
      "
      >
        <Mail
          size={18}
          className="mr-3 text-slate-500"
        />

        <input
          placeholder={placeholder}
          className="
          flex-1
          bg-transparent
          outline-none
          text-white
          placeholder:text-slate-500
        "
        />
      </div>
    </div>
  );
}