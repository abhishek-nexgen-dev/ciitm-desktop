import TopNavbar from "./ui/TopNavbar";
import DashboardCard from "./ui/DashboardCard";
import { DASHBOARD_CARDS } from "./constant/DASHBOARD_CARDS.Constant";
import useAuthStorage from "../../login/v1/hooks/useAuthStorage";

const DashboardPage = () => {
  const user = useAuthStorage.getState().user;

  console.log("User from Auth Storage:", user);

  return (
    <div className="h-screen flex flex-col">
      <TopNavbar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="p-6 ">
          <h1 className="text-2xl font-bold text-white">Welcome back,</h1>
          <h2 className="text-xl font-semibold text-zinc-500 mt-1">
            <span className="text-white">{user?.name}</span>! Here's an overview of your dashboard.
          </h2>
        </div>

        <div className="flex flex-wrap   p-6 lg:items-center lg:justify-center gap-[1.5vw] w-full ">
          {DASHBOARD_CARDS.map((card) => {
            const Icon = card.logo;

            return (
              <DashboardCard
                key={card.id}
                isActive={card.isActive}
                title={card.title}
                value={card.value}
                range={card.range}
                logo={<Icon size={120} />}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
