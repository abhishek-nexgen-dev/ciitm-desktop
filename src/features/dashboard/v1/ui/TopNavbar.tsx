import { Bell, Search, Grid3X3, CircleHelp, ChevronDown } from "lucide-react";
import { memo } from "react";

function TopNavbar() {
  return (
    <header className="h-[70px] bg-black border-b border-zinc-800 flex items-center justify-end px-6">
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="text-zinc-300 hover:text-white transition">
          <Bell size={22} />
        </button>

        {/* Apps */}
        <button className="text-zinc-300 hover:text-white transition">
          <Grid3X3 size={22} />
        </button>

        {/* Help */}
        <button className="text-zinc-300 hover:text-white transition">
          <CircleHelp size={22} />
        </button>

        {/* Avatar */}
        <button className="group">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User"
            className="
              w-10
              h-10
              rounded-full
              object-cover
              border
              border-zinc-700
              group-hover:border-violet-400
              transition
            "
          />
        </button>
      </div>
    </header>
  );
}

export default memo(TopNavbar);
