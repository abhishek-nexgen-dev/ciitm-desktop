import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function SocialLogin() {
  const navigate = useNavigate();

  const handleGoogleSso = () => {
    toast.info("Institutional Google SSO: Authenticating as admin@gmail.com...");
    setTimeout(() => {
      toast.success("Google SSO Verified! Entering ERP dashboard...");
      navigate("/dashboard");
    }, 900);
  };

  const handleMicrosoftSso = () => {
    toast.info("Microsoft Entra ID: Authenticating institutional tenant...");
    setTimeout(() => {
      toast.success("Microsoft Single Sign-On Verified!");
      navigate("/dashboard");
    }, 900);
  };

  return (
    <>
      <div className="my-6 sm:my-8 flex items-center">
        <div className="h-px flex-1 bg-zinc-800" />
        <span className="px-3 sm:px-4 text-[11px] sm:text-xs uppercase text-zinc-400 tracking-[0.2em]">
          Institutional SSO
        </span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white">
        <button
          type="button"
          onClick={handleGoogleSso}
          className="h-11 sm:h-12 rounded-xl border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-600 transition flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Google Workspace
        </button>

        <button
          type="button"
          onClick={handleMicrosoftSso}
          className="h-11 sm:h-12 rounded-xl border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-600 transition flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium"
        >
          <svg className="w-4 h-4" viewBox="0 0 23 23">
            <path fill="#f35325" d="M1 1h10v10H1z" />
            <path fill="#81bc06" d="M12 1h10v10H12z" />
            <path fill="#05a6f0" d="M1 12h10v10H1z" />
            <path fill="#ffba08" d="M12 12h10v10H12z" />
          </svg>
          Microsoft Entra
        </button>
      </div>
    </>
  );
}
