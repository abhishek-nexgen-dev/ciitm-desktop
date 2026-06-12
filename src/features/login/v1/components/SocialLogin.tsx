import { GeorgianLariIcon } from "lucide-react";

export function SocialLogin() {
  return (
    <>
      <div className="my-8 flex items-center">
        <div className="h-px flex-1 bg-slate-800" />

        <span
          className="
          px-4
          text-xs
          uppercase
          text-white
          tracking-[0.25em]
     
        "
        >
          External Access
        </span>

        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3  text-white">
        <button
          className="
          h-12
          rounded-xl
          border
          border-slate-700
          hover:bg-slate-800
        "
        >
          <span className="flex items-center justify-center gap-2">
            <GeorgianLariIcon size={18} />
            Google
          </span>
        </button>

        <button
          className="
          h-12
          rounded-xl
          border
          border-slate-700
          hover:bg-slate-800
        "
        >
          Microsoft
        </button>
      </div>
    </>
  );
}