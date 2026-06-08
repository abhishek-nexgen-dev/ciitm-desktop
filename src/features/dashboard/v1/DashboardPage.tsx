import TopNavbar from "./ui/TopNavbar";
import DashboardCard from "./ui/DashboardCard";
import { DASHBOARD_CARDS } from "./constant/DASHBOARD_CARDS.Constant";

const DashboardPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopNavbar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="p-6 ">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>

          <p className="text-zinc-500 text-md mt-1">
            Welcome back, here is what’s happening with your store today.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-[1.5vw] w-full ">
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
