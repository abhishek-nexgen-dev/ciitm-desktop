import { StudentFilters } from "./v1/Components/StudentFilters";
import { StudentHeader } from "./v1/Components/StudentHeader";
import { StudentTable } from "./v1/Components/StudentTable";

const studentOptions = [
  "Bachelor of Computer Applications (BCA)",
  "Master of Computer Applications (MCA)",
  "Bachelor of Commerce (B.Com)",
  "Bachelor of Business Administration (BBA)",
];

export default function StudentDirectoryPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <StudentHeader />
        <StudentFilters courses={studentOptions} semesters={[1, 2, 3, 4, 5]} />

        <StudentTable />
      </div>
    </div>
  );
}
