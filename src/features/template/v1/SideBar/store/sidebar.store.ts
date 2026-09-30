import { create } from "zustand";

interface SidebarStore {
  collapsed: boolean;
  mobileOpen: boolean;
  toggleCollapse: () => void;
  setMobileOpen: (open: boolean) => void;
  toggleMobile: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  collapsed: false,
  mobileOpen: false,

  toggleCollapse: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),

  setMobileOpen: (mobileOpen) => set({ mobileOpen }),

  toggleMobile: () =>
    set((state) => ({
      mobileOpen: !state.mobileOpen,
    })),
}));
