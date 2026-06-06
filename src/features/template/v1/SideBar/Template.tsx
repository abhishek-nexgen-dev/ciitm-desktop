import { Outlet } from "react-router-dom";
import { Sidebar } from "./ui/SideBar";

const Template = () => {
  return (
    <div className="flex min-h-screen w-screen bg-[#06070B] text-white">
      <Sidebar />
      <div className="min-w-0 flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Template;
