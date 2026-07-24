import { useState } from "react";
import { Badge, Bell, Pencil, TrendingUp } from "lucide-react";

import Card from "./Card";
import StatCard from "./StatCard";
import PromoteModal from "./PromoteModal";
import useStudentStore from "../../../Course/v1/store/student.store";
import SendNotificationModal from "./SendNotificationModal";

const StudentProfileHeader = () => {
  const student = useStudentStore((state) => state.students[0]);

  const [openPromoteModal, setOpenPromoteModal] = useState(false);

  const [openNotificationModal, setOpenNotificationModal] = useState(false);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card>
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-5 sm:flex-row">
            <img
              src={student.student.avtar}
              alt={`${student.student.firstName} ${student.student.lastName}`}
              className="h-24 w-24 rounded-xl border border-zinc-800 object-cover"
            />

            <div className="flex-1">
              {/* Name */}
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-bold text-white">
                  {student.student.firstName} {student.student.lastName}
                </h1>

                <Badge>{student.isAdmitted ? "Active" : "Pending"}</Badge>

                <Badge>Semester {student.semester}</Badge>
              </div>

              {/* Meta */}
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-zinc-400">
                <span>{student.uniqueId}</span>
                <span>•</span>
                <span>{student.university}</span>
                <span>•</span>
                <span>{student.mode}</span>
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
                  onClick={() => setOpenNotificationModal(true)}
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
                  onClick={() => setOpenPromoteModal(true)}
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
                  Promote / Demote
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
            <StatCard title="Pending Dues" value={`₹${student.fee.amount_due}`} />
          </div>
        </div>
      </Card>

      <PromoteModal
        isOpen={openPromoteModal}
        onClose={() => setOpenPromoteModal(false)}
        studentName={`${student.student.firstName} ${student.student.lastName}`}
        currentSemester={student.semester}
        onPromote={() => {
          console.log("Promote Student");
          // Call your promote API here

          setOpenPromoteModal(false);
        }}
        onDemote={() => {
          console.log("Demote Student");
          // Call your demote API here

          setOpenPromoteModal(false);
        }}
      />

      <SendNotificationModal
        isOpen={openNotificationModal}
        onClose={() => setOpenNotificationModal(false)}
        email={student.student.email[0]}
        onSend={(data) => {
          console.log(data);

          // Example:
          // api.post("/api/v1/notification/send", data);

          setOpenNotificationModal(false);
        }}
      />
    </>
  );
};

export default StudentProfileHeader;
