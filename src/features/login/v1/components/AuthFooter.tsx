import { toast } from "react-toastify";

export function AuthFooter() {
  const showHelpdesk = () => {
    toast.info("CIITM IT Helpdesk: Contact admin@ciitm.edu or Ext. 104 (Mon-Sat, 9AM-6PM IST)");
  };

  const showPolicy = (title: string) => {
    toast.info(`${title}: CIITM IT Security Directive 2026. All operations are logged & audited.`);
  };

  return (
    <div className="mt-6 sm:mt-8 space-y-3.5 text-center">
      <p className="text-xs sm:text-sm text-zinc-400">
        Authentication issues?
        <button
          type="button"
          onClick={showHelpdesk}
          className="ml-1.5 font-medium text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
        >
          Contact ERP Helpdesk
        </button>
      </p>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-zinc-500">
        <button
          type="button"
          onClick={() => showPolicy("Privacy Policy")}
          className="hover:text-zinc-300 transition"
        >
          Privacy Policy
        </button>
        <span>•</span>
        <button
          type="button"
          onClick={() => showPolicy("Terms of Service")}
          className="hover:text-zinc-300 transition"
        >
          Institutional Terms
        </button>
        <span>•</span>
        <span className="font-mono text-emerald-400/80">TLS 1.3</span>
      </div>
    </div>
  );
}
