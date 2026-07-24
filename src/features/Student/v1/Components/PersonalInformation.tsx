import { User } from "lucide-react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

import Input from "../../../../Components/Input";
import useStudentStore from "../../../Course/v1/store/student.store";

function PersonalInformation() {
  const student = useStudentStore((state) => state.students[0]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="w-1/2">
      <SectionTitle icon={<User size={16} />} title="Personal Information" />

      <div className="mt-6 grid gap-5 ">
        <Input
          name="email"
          placeholder="Enter your email"
          label="Email"
          value={String(student.student.email[0])}
        />
        <Input
          name="phone"
          placeholder="Enter your phone number"
          label="Phone"
          value={String(student.student.contactNumber)}
        />
        <Input
          name="dob"
          placeholder="Enter your date of birth"
          label="Date of Birth"
          value={String(student.student.dateOfBirth.slice(0, 10))}
        />

        <Input
          name="aadharNumber"
          placeholder="Enter your Aadhar Number"
          label="Aadhar Number"
          value={student?.AadharCard?.AadharCardNumber}
        />

        <Input name="gender" placeholder="Enter your gender" label="Gender" value="Male" />
      </div>
    </Card>
  );
}

export default PersonalInformation;
