import Card from "./Card";
import { Badge, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import useStudentStore from "../../../Course/v1/store/student.store";

function AcademicCredentials() {
  const student = useStudentStore((state) => state.students[0]);

  if (!student) {
    return <div>Loading...</div>;
  }

  const tenthPercentage = ((student?.tenth.tenthMarks / 500) * 100).toFixed(2);

  const twelfthPercentage = ((student?.twelfth.twelfthMarks / 500) * 100).toFixed(2);

  return (
    <Card>
      <SectionTitle icon={<GraduationCap size={18} />} title="Academic Credentials" />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* 10th Details */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
          <h3 className="font-semibold text-lg">10th Board Examination</h3>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">Board</span>
              <span>{student?.tenth.tenthBoard}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">Marks</span>
              <span>{student?.tenth.tenthMarks} / 500</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">Percentage</span>
              <span>{tenthPercentage}%</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">Grade</span>
              <Badge>{student?.tenth.tenthGrade}</Badge>
            </div>
          </div>
        </div>

        {/* 12th Details */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
          <h3 className="font-semibold text-lg">12th Board Examination</h3>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">Board</span>
              <span>{student?.twelfth.twelfthBoard}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">Marks</span>
              <span>{student?.twelfth.twelfthMarks} / 500</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">Percentage</span>
              <span>{twelfthPercentage}%</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">Grade</span>
              <Badge>{student?.twelfth.twelfthGrade}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Current Institution */}
      <div className="mt-8 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
        <h3 className="font-semibold text-lg">Current Institution</h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2 text-sm">
          <div className="flex justify-between">
            <span className="text-zinc-500">University</span>
            <span>{student?.university}</span>
          </div>

          <div className="flex justify-between mx-[1.5vw]">
            <span className="text-zinc-500">Semester</span>
            <span>{student?.semester}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-zinc-500">Mode</span>
            <Badge>{student?.mode}</Badge>
          </div>

          <div className="flex justify-between md:col-span-2">
            <span className="text-zinc-500">Admission Date</span>
            <span>{new Date(student?.dateOfAdmission).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AcademicCredentials;
