import { StudentFilters } from "./v1/Components/StudentFilters";
import { StudentHeader } from "./v1/Components/StudentHeader";
import { StudentTable } from "./v1/Components/StudentTable";

export default function StudentDirectoryPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <StudentHeader />
        <StudentFilters />
        <StudentTable />
      </div>
    </div>
  );
}
