import { NavLink } from "react-router-dom";
import clsx from "clsx";
import type { SidebarItemConfig } from "../config/sidebar.config";

interface Props {
  item: SidebarItemConfig;
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: Props) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        clsx(
          "group flex items-center gap-3 rounded-xl px-4 py-3 transition-all",

          isActive
            ? "bg-indigo-600 text-white"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
        )
      }
    >
      <Icon size={20} />

      {!collapsed && (
        <>
          <span className="font-medium">{item.title}</span>

          {item.badge && (
            <span className="ml-auto rounded-full bg-indigo-500 px-2 py-1 text-xs">
              {item.badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
};
