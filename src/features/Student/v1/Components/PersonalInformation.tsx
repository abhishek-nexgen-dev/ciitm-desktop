import { User } from "lucide-react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Info from "./Info";

function PersonalInformation() {
  return (
    <Card>
      <SectionTitle icon={<User size={16} />} title="Personal Information" />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Info label="Email" value="rahul.k@institute.edu" />
        <Info label="Phone" value="+91 98765 43210" />
        <Info label="Date of Birth" value="12 August 2004" />
        <Info label="Gender" value="Male" />
      </div>
    </Card>
  );
}

export default PersonalInformation;
