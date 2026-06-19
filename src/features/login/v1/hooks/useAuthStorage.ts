import { create } from "zustand";

type AuthStorageState = {
  token: string | null;
  isRememberMe: boolean;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
  } | null;

  setUser: (user: { _id: string; name: string; email: string; role: string } | null) => void;
  setToken: (token: string | null) => void;
  setIsRememberMe: (isRememberMe: boolean) => void;
};

const useAuthStorage = create<AuthStorageState>((set) => ({
  token: null,
  user: null,
  isRememberMe: false,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setIsRememberMe: (isRememberMe) => set({ isRememberMe }),
}));

export default useAuthStorage;
