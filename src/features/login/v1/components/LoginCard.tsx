import { toast } from "react-toastify";
import useLoginForm from "../hooks/useLoginForm";
import useLogin from "../hooks/useLogin";
import { Building2 } from "lucide-react";
import { SocialLogin } from "./SocialLogin";
import { SecurityBadges } from "./SecurityBadges";
import { AuthFooter } from "./AuthFooter";
import Input from "../../../../Components/Input";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStorage from "../hooks/useAuthStorage";

export function LoginCard() {
  const { watch, setValue, formState, handleSubmit } = useLoginForm();
  const { errors } = formState;
  const [email, setEmail] = useState(watch("email"));
  const [password, setPassword] = useState(watch("password"));

  const isRememberMe = useAuthStorage((state) => state.isRememberMe);

  const loginMutation = useLogin();
  const navigate = useNavigate();

  const TEST_CREDENTIALS = {
    email: "admin@gmail.com",
    password: "Admin@123",
  };

  const fillTestCredentials = () => {
    setValue("email", TEST_CREDENTIALS.email, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setValue("password", TEST_CREDENTIALS.password, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setEmail(TEST_CREDENTIALS.email);
    setPassword(TEST_CREDENTIALS.password);
  };

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const res = await loginMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });

      const user = (res as any)?.data?.user || (res as any)?.user || (res as any)?.data;

      if (user && user.role && user.role !== "admin") {
        toast.error("You are not authorized to access this portal.");
        return;
      }

      toast.success("Login successful! Redirecting to dashboard...");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Login failed. Please check your credentials.");
    }
  };

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

      <form className="space-y-5 mt-8" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(_name, value) => {
            setValue("email", value);
            setEmail(value);
          }}
          error={errors.email?.message}
          readonly={false}
        />

        <Input
          name="password"
          label="Password"
          placeholder="Enter your password"
          type={isRememberMe ? "text" : "password"}
          value={password}
          onChange={(_name, value) => {
            setValue("password", value);
            setPassword(value);
          }}
          error={errors.password?.message}
          readonly={false}
        />

        <button
          type="button"
          onClick={fillTestCredentials}
          className="
    w-full
    rounded-xl
    border
    border-indigo-500/30
    bg-indigo-500/10
    py-3
    text-sm
    font-medium
    text-indigo-300
    hover:bg-indigo-500/20
  "
        >
          Use Test Credentials
        </button>

        <Options />

        <SignInButton loading={loginMutation.isPending} />
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
      <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 text-white items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10 shadow-lg shadow-indigo-500/20">
        <Building2 size={28} />
      </div>

      <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">CIITM ERP</h1>

      <p className="mt-1 text-xs sm:text-sm text-zinc-400">Institutional Governance & Administrative Portal</p>
    </div>
  );
}

function Options() {
  const isRememberMe = useAuthStorage((state) => state.isRememberMe);
  const setIsRememberMe = useAuthStorage((state) => state.setIsRememberMe);

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRememberMe(event.target.checked);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
      <label className="flex items-center gap-2 text-zinc-400 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={isRememberMe}
          onChange={handleRememberMeChange}
          className="rounded border-zinc-700 bg-zinc-900 text-indigo-600 focus:ring-0"
        />
        Remember session
      </label>

      <Link
        to="/forgot-password"
        className="font-medium text-indigo-400 hover:text-indigo-300 transition"
      >
        Forgot Password?
      </Link>
    </div>
  );
}

function SignInButton({ loading }: { loading?: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
      h-11 sm:h-12
      w-full
      rounded-xl
      bg-indigo-600
      font-semibold
      text-xs sm:text-sm
      text-white
      shadow-lg shadow-indigo-600/20
      transition-all
      hover:bg-indigo-500
      active:scale-[0.99]
      disabled:opacity-60
    "
    >
      {loading ? "Authenticating Clearance..." : "Sign In To Portal"}
    </button>
  );
}
