import Card from "./v1/Components/Card";
import PersonalInformation from "./v1/Components/PersonalInformation";
import AcademicCredentials from "./v1/Components/AcademicCredentials";
import AddressCard from "./v1/Components/AddressCard";
import EngagementCard from "./EngagementCard";
import AdministrativeNotes from "./v1/Components/AdministrativeNotes";

import StudentProfileHeader from "./v1/Components/StudentProfileHeader";
import { ParentInfoCard } from "./v1/Components/ParentInfoCard";

export default function StudentProfilePage() {
  return (
    <div className="min-h-screen bg-[#0B0C10] p-4 lg:p-6">
      <div className="mx-auto max-w-7xl space-y-4">
        <StudentProfileHeader />

        {/* Content */}
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            <div className="flex gap-2">
              <PersonalInformation />
              <ParentInfoCard fatherName="asfd" motherName="asfd" emergencyPhone="asfd" />
            </div>
            <AcademicCredentials />
            <AddressCard />
          </div>

          <div className="space-y-4 lg:col-span-4">
            <EngagementCard />
            <AdministrativeNotes />
            <SystemActions />
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemActions() {
  return (
    <Card>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
        System Actions
      </h3>

      <div className="mt-5 space-y-3">
        <ActionButton>Reset LMS Credentials</ActionButton>

        <ActionButton>Issue Bonafide Certificate</ActionButton>

        <ActionButton danger>Mark For Suspension</ActionButton>
      </div>
    </Card>
  );
}

function ActionButton({ children, danger }: { children: React.ReactNode; danger?: boolean }) {
  return (
    <button
      className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition ${
        danger
          ? "border-red-900 bg-red-950/20 text-red-400 hover:bg-red-950/40"
          : "border-zinc-700 bg-zinc-950 text-zinc-200 hover:bg-zinc-800"
      }`}
    >
      {children}
    </button>
  );
}
