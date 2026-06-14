import React from "react";
import Card from "./Card";
import StatCard from "./StatCard";
import { Badge, Bell, Pencil, TrendingUp } from "lucide-react";

const StudentProfileHeader = () => {
  return (
    <Card>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        {/* Left Section */}
        <div className="flex flex-col gap-5 sm:flex-row">
          <img
            src="https://i.pravatar.cc/300?img=12"
            alt="Student"
            className="
              h-24
              w-24
              rounded-xl
              border
              border-zinc-800
              object-cover
            "
          />

          <div className="flex-1">
            {/* Name */}
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-white">Rahul Kumar</h1>

              <Badge>Active</Badge>

              <Badge>Year 3</Badge>

              <Badge>Semester 5</Badge>
            </div>

            {/* Meta */}
            <div className="mt-2 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span>CIT-2023-0102</span>
              <span>•</span>
              <span>B.Tech Computer Science</span>
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-blue-600
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                <Pencil size={16} />
                Update Records
              </button>

              <button
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-zinc-700
                  bg-zinc-950
                  px-4
                  py-2.5
                  text-sm
                  text-zinc-300
                  transition
                  hover:bg-zinc-800
                "
              >
                <Bell size={16} />
                Send Notification
              </button>

              <button
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-emerald-500/30
                  bg-emerald-500/10
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-emerald-400
                  transition
                  hover:bg-emerald-500/20
                "
              >
                <TrendingUp size={16} />
                Promote Student
              </button>
            </div>
          </div>
        </div>

        {/* Right Stats */}
        <div
          className="
            grid
            w-full
            gap-3
            sm:grid-cols-3
            xl:w-[360px]
            xl:grid-cols-1
          "
        >
          <StatCard title="Attendance" value="92%" />

          <StatCard title="Current GPA" value="8.5" />

          <StatCard title="Pending Dues" value="0" />
        </div>
      </div>
    </Card>
  );
};

export default StudentProfileHeader;
