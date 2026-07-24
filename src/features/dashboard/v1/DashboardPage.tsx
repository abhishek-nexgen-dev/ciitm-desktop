import { useEffect, useMemo, useState } from "react";

import TopNavbar from "./ui/TopNavbar";
import DashboardCard from "./ui/DashboardCard";
import { DASHBOARD_CARDS } from "./constant/DASHBOARD_CARDS.Constant";
import { DashboardApiResponse } from "./types/DashboardApiResponse";

import useAuthStorage from "../../login/v1/hooks/useAuthStorage";
import { useSocket } from "../../../Utils/useSocket";

const DashboardPage = () => {
  const user = useAuthStorage.getState().user;
  const socket = useSocket();

  const [dashboardData, setDashboardData] = useState<DashboardApiResponse[]>([]);

  useEffect(() => {
    const handleDashboardData = (data: { DashBoard_Data: [DashboardApiResponse] }) => {
      console.log("Dashboard Data:", data);
      setDashboardData(data.DashBoard_Data);
    };

    socket.emit("Request_DashBoard_Data");

    socket.on("DashBoard_Data", handleDashboardData);

    return () => {
      socket.off("DashBoard_Data", handleDashboardData);
    };
  }, [socket]);

  const cards = useMemo(() => {
    return DASHBOARD_CARDS.map((card) => {
      const apiData = dashboardData.find((item) => item.name === card.title);

      return {
        ...card,
        value: apiData?.value ?? 0,
        color: apiData?.color ?? "#6366F1",
      };
    });
  }, [dashboardData]);

  return (
    <div className="flex h-screen flex-col">
      <TopNavbar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white">Welcome back,</h1>

          <h2 className="mt-1 text-xl font-semibold text-zinc-500">
            <span className="text-white">{user?.name}</span>! Here's an overview of your dashboard.
          </h2>
        </div>

        <div className="flex flex-wrap  gap-6 p-6">
          {cards.map((card) => {
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
