import { useForm } from "react-hook-form";

import { loginSchema } from "../Validator/LoginValidator";
import { zodResolver } from "@hookform/resolvers/zod";

const useLoginForm = () => {
  return useForm({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",

    defaultValues: {
      email: "",
      password: "",
    },
  });
};

export default useLoginForm;
