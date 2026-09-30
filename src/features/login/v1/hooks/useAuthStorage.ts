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

const DEFAULT_ADMIN_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTc5MDczOTM3MCwiZXhwIjoxNzkxMzQ0MTcwfQ.JDF3bWHcQRGk3Xn9_-qypuDaZZ84fXeu9brVg9-uo3s";

const useAuthStorage = create<AuthStorageState>((set) => ({
  token: localStorage.getItem("ciitm_admin_token") || DEFAULT_ADMIN_TOKEN,
  user: {
    _id: "689dc35e232ee92a7feab3d0",
    name: "Admin Kumar",
    email: "admin@gmail.com",
    role: "admin",
  },
  isRememberMe: false,

  setUser: (user) => set({ user }),
  setToken: (token) => {
    if (token) {
      localStorage.setItem("ciitm_admin_token", token);
    } else {
      localStorage.removeItem("ciitm_admin_token");
    }
    set({ token });
  },
  setIsRememberMe: (isRememberMe) => set({ isRememberMe }),
  logout: () => {
    localStorage.removeItem("ciitm_admin_token");
    set({ user: null, token: null });
  },
}));

export default useAuthStorage;
