import { BookOpen, GraduationCap, Users, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type DashboardCardItem = {
  id: string;
  isActive: boolean;
  title: string;
  value: string;
  range: [number, number];
  logo: LucideIcon;
};

export const DASHBOARD_CARDS: DashboardCardItem[] = [
  {
    id: "revenue",
    isActive: true,
    title: "Total Revenue",
    value: "$84.2M",
    range: [80, 100] as [number, number],
    logo: Wallet,
  },
  {
    id: "students",
    isActive: false,
    title: "Total Students",
    value: "$24.8M",
    range: [10, 100] as [number, number],
    logo: GraduationCap,
  },
  {
    id: "teachers",
    isActive: false,
    title: "Total Teachers",
    value: "$12.5M",
    range: [20, 100] as [number, number],
    logo: Users,
  },
  {
    id: "courses",
    isActive: false,
    title: "Total Courses",
    value: "$6.3M",
    range: [30, 100] as [number, number],
    logo: BookOpen,
  },
];
