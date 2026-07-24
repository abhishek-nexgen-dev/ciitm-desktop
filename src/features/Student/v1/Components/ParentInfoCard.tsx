import { User } from "lucide-react";
import Input from "../../../../Components/Input";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import useStudentStore from "../../../Course/v1/store/student.store";

export function ParentInfoCard() {
  const student = useStudentStore((state) => state.students[0]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="w-1/2">
      <div className="space-y-5">
        <SectionTitle icon={<User size={16} />} title="Parent Information" />

        <div className="mt-6 grid gap-5 ">
          <Input
            type="text"
            value={student.student.fatherName}
            label="Father Name"
            readonly={true}
            name="fatherName"
            placeholder="Your Father Name"
          />

          <Input
            type="text"
            value={student.student.motherName}
            label="Mother Name"
            readonly={true}
            name="motherName"
            placeholder="Your Mother Name"
          />

          <Input
            type="text"
            value={student.student.contactNumber}
            label="Emergency Contact Number"
            readonly={true}
            name="emergencyPhone"
            placeholder="Emergency Contact Number"
          />
        </div>
      </div>
    </Card>
  );
}
