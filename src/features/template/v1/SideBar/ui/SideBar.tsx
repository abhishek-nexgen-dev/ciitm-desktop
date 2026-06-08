import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebarStore } from "../store/sidebar.store";
import { SidebarItem } from "./SidebarItem";
import { sidebarConfig } from "../config/sidebar.config";

export const Sidebar = () => {
  const { collapsed, toggleCollapse } = useSidebarStore();

  return (
    <aside
      className={`
      bg-[#06070B]
      border-r border-zinc-900
      h-screen
      sticky top-0
      flex flex-col
      transition-all duration-300
      px-[2vw]
      ${collapsed ? "w-20" : "w-[20%]"}
    `}
    >
      {/* Logo */}

      <div
        className="
        mb-[2vh]
        h-20
        px-6
        flex
        items-center
        justify-between
      "
      >
        {!collapsed && (
          <div>
            <h1 className="font-bold text-2xl text-white">ciitm</h1>

            <p className="text-xs text-zinc-500">Super Admin</p>
          </div>
        )}

        <button
          onClick={toggleCollapse}
          className="
          h-10 w-10
          rounded-lg
          bg-zinc-800
          text-white
        "
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Nav */}

      <nav
        className="
        flex-1
        space-y-2
        px-3
        overflow-y-auto
      "
      >
        {sidebarConfig.map((item) => (
          <SidebarItem key={item.id} item={item} collapsed={collapsed} />
        ))}
      </nav>

      {/* Footer */}

      <div className="p-4 border-t border-zinc-900">
        <button
          className="
          w-full
          bg-indigo-600
          hover:bg-indigo-500
          rounded-xl
          py-3
          text-white
          font-medium
        "
        >
          Support Desk
        </button>

        {!collapsed && (
          <div className="mt-5 space-y-3">
            <button className="w-full text-left text-zinc-400 hover:text-white">Profile</button>

            <button className="w-full text-left text-red-400">Logout</button>
          </div>
        )}
      </div>
    </aside>
  );
};
