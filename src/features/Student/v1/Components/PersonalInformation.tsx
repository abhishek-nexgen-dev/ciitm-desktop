import { User } from "lucide-react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

import Input from "../../../../Components/Input";

function PersonalInformation() {
  return (
    <Card className="w-1/2">
      <SectionTitle icon={<User size={16} />} title="Personal Information" />

      <div className="mt-6 grid gap-5 ">
        <Input
          name="email"
          placeholder="Enter your email"
          label="Email"
          value="rahul.k@institute.edu"
        />
        <Input
          name="phone"
          placeholder="Enter your phone number"
          label="Phone"
          value="+91 98765 43210"
        />
        <Input
          name="dob"
          placeholder="Enter your date of birth"
          label="Date of Birth"
          value="12 August 2004"
        />
        <Input name="gender" placeholder="Enter your gender" label="Gender" value="Male" />
      </div>
    </Card>
  );
}

export default PersonalInformation;
