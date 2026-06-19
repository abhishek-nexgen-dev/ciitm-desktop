import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import api from "../../../../Utils/api.utils";
import useAuthStorage from "./useAuthStorage";

type AuthResponse = {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
};

export default function useLogin() {
  return useMutation<AxiosResponse<AuthResponse>, unknown, { email: string; password: string }>({
    mutationFn: async ({ email, password }) => {
      const response = await api.post(`/api/v1/auth/login`, { email, password });

      return response.data;
    },

    onSuccess: (res) => {
      const user = res.data.user;
      useAuthStorage.getState().setUser({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    },

    onError: (error) => {
      throw new Error(
        "Login failed: " +
          (axios.isAxiosError(error) ? error.response?.data?.message : String(error)),
      );
    },
  });
}
