import { Wallet, GraduationCap, BookOpen, Images, Image, Phone, LucideIcon } from "lucide-react";

export interface DashboardCardItem {
  id: string;
  title: string;
  logo: LucideIcon;
}

export const DASHBOARD_CARDS = [
  {
    id: "earnings",
    title: "Total Earnings",
    logo: Wallet,
    isActive: true,
    range: [80, 100] as [number, number],
  },
  {
    id: "admission",
    title: "Total Admission",
    logo: GraduationCap,
    isActive: false,
    range: [10, 100] as [number, number],
  },
  {
    id: "courses",
    title: "Total Courses",
    logo: BookOpen,
    isActive: false,
    range: [20, 100] as [number, number],
  },
  {
    id: "album",
    title: "Total Album",
    logo: Images,
    isActive: false,
    range: [30, 100] as [number, number],
  },
  {
    id: "image",
    title: "Total Image",
    logo: Image,
    isActive: false,
    range: [40, 100] as [number, number],
  },
  {
    id: "contact",
    title: "Total Contact",
    logo: Phone,
    isActive: false,
    range: [50, 100] as [number, number],
  },
];
