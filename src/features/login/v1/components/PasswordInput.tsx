import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

export function PasswordInput() {
  const [show, setShow] = useState(false);

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
        Password
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
        focus-within:border-indigo-500
      "
      >
        <Lock size={18} className="mr-3 text-slate-500" />

        <input
          type={show ? "text" : "password"}
          placeholder="••••••••"
          className="
          flex-1
          bg-transparent
          outline-none
          text-white
        "
        />

        <button type="button" onClick={() => setShow(!show)} className="text-slate-500">
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
