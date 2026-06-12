export function AuthFooter() {
  return (
    <div className="mt-8 space-y-4">
      <p
        className="
        text-center
        text-sm
        text-slate-400
      "
      >
        Technical issues?
        <button className="ml-1 text-indigo-400">
          Contact ERP Helpdesk
        </button>
      </p>

      <div
        className="
        flex
        flex-wrap
        justify-center
        gap-4
        text-xs
        text-slate-500
      "
      >
        <button>Privacy Policy</button>
        <button>Terms of Service</button>
      </div>
    </div>
  );
}