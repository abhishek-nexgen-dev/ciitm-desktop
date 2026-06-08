import {
  LayoutDashboard,
  GraduationCap,
  Users,
  Wallet,
  BookOpen,
  Building2,
  FileBarChart,
  Settings,
  Shield,
  Calendar,
  ClipboardList,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface SidebarItemConfig {
  id: string;
  title: string;
  icon: LucideIcon;
  path: string;
  badge?: string;
}

export const sidebarConfig: SidebarItemConfig[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },

  {
    id: "admissions",
    title: "Admissions",
    icon: GraduationCap,
    path: "/admissions",
  },

  {
    id: "students",
    title: "Students",
    icon: Users,
    path: "/students",
  },

  {
    id: "finance",
    title: "Finance",
    icon: Wallet,
    path: "/payment",
  },

  {
    id: "directories",
    title: "Directories",
    icon: Building2,
    path: "/directories",
  },

  {
    id: "lms",
    title: "LMS",
    icon: BookOpen,
    path: "/lms",
  },

  {
    id: "attendance",
    title: "Attendance",
    icon: ClipboardList,
    path: "/attendance",
  },

  {
    id: "events",
    title: "Events",
    icon: Calendar,
    path: "/events",
  },

  {
    id: "reports",
    title: "Reports",
    icon: FileBarChart,
    path: "/reports",
  },

  {
    id: "users",
    title: "User Management",
    icon: Shield,
    path: "/users",
  },

  {
    id: "settings",
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
