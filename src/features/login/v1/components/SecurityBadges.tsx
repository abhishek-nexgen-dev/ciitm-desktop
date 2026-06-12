import { ShieldCheck, Shield } from "lucide-react";

export function SecurityBadges() {
  return (
    <div
      className="
      mt-8
      flex
      flex-wrap
      justify-center
      gap-5
      text-xs
      text-slate-500
    "
    >
      <div className="flex items-center gap-1">
        <ShieldCheck size={14} />
        2FA Enabled
      </div>

      <div className="flex items-center gap-1">
        <Shield size={14} />
        Captcha Protected
      </div>
    </div>
  );
}
