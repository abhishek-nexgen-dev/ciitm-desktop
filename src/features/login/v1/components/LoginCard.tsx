import { Building2 } from "lucide-react";
import { AuthInput } from "./AuthInput";
import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";
import { SecurityBadges } from "./SecurityBadges";
import { AuthFooter } from "./AuthFooter";
import { Link } from "react-router-dom";

export function LoginCard() {
  return (
    <div
      className="
      w-full
      max-w-md
      rounded-3xl
      
     border
      border-zinc-800
      bg-black
      backdrop-blur-xl
      shadow-2xl
      p-6
      sm:p-8
    "
    >
      <Header />

      <form className="space-y-5 mt-8">
        <AuthInput label="Username or Email" placeholder="admin@ciitm.edu.in" />

        <PasswordInput />

        <Options />

        <SignInButton />
      </form>

      <SocialLogin />

      <SecurityBadges />

      <AuthFooter />
    </div>
  );
}

function Header() {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 text-white items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10">
        <Building2 size={30} />
      </div>

      <h1 className="mt-5 text-3xl font-bold text-white">CIITM ERP</h1>

      <p className="mt-2 text-slate-400">Welcome to CIITM Admin Portal</p>
    </div>
  );
}

function Options() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
      <label className="flex items-center gap-2 text-slate-400">
        <input type="checkbox" />
        Remember me
      </label>

      <button type="button" className="text-indigo-400 hover:text-indigo-300">
        Forgot Password?
      </button>
    </div>
  );
}

function SignInButton() {
  return (
    <button
      className="
      h-12
      w-full
      rounded-xl
      bg-indigo-500
      font-semibold
      text-white
      transition-all
      hover:bg-indigo-600
      active:scale-[0.99]
    "
    >
      <Link to="/dashboard">Sign In To Portal</Link>
    </button>
  );
}
