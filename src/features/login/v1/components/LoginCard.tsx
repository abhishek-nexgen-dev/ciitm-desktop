import { toast } from "react-toastify";
import useLoginForm from "../hooks/useLoginForm";
import useLogin from "../hooks/useLogin";
import { Building2 } from "lucide-react";
import { SocialLogin } from "./SocialLogin";
import { SecurityBadges } from "./SecurityBadges";
import { AuthFooter } from "./AuthFooter";
import Input from "../../../../Components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      console.log("Data ----->", data);
      const res = await loginMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });

      const user = res.data.user;

      if (user.role !== "admin") {
        toast.error("You are not authorized to access this portal.");
        return;
      }

      toast.success("Login successful! Redirecting to dashboard...");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

      console.log("Response ----->", res);
    } catch (error) {
      toast.error("Login failed: " + (error instanceof Error ? error.message : String(error)));
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
          onChange={(name, value) => {
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
          onChange={(name, value) => {
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
  const isRememberMe = useAuthStorage((state) => state.isRememberMe);

  const setIsRememberMe = useAuthStorage((state) => state.setIsRememberMe);

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRememberMe(event.target.checked);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
      <label className="flex items-center gap-2 text-slate-400">
        <input type="checkbox" checked={isRememberMe} onChange={handleRememberMeChange} />
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
      type="submit"
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
      Sign In To Portal
    </button>
  );
}
