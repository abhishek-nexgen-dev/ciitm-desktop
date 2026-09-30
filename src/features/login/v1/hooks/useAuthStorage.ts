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
  logout: () => void;
};

const useAuthStorage = create<AuthStorageState>((set) => ({
  token: null,
  user: {
    _id: "6740b2f5a8c43d9124a87211",
    name: "Prof. R. K. Sharma",
    email: "admin@gmail.com",
    role: "admin",
  },
  isRememberMe: false,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setIsRememberMe: (isRememberMe) => set({ isRememberMe }),
  logout: () => set({ user: null, token: null }),
}));

export default useAuthStorage;
