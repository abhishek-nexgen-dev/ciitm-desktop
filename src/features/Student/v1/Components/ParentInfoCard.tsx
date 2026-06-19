import { User } from "lucide-react";
import Input from "../../../../Components/Input";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

interface ParentInfoCardProps {
  fatherName: string;
  motherName: string;
  emergencyPhone: string;
}

export function ParentInfoCard({ fatherName, motherName, emergencyPhone }: ParentInfoCardProps) {
  return (
    <Card className="w-1/2">
      <div className="space-y-5">
        <SectionTitle icon={<User size={16} />} title="Parent Information" />

        <div className="mt-6 grid gap-5 ">
          <Input
            type="text"
            value={fatherName}
            label="Father Name"
            readonly={true}
            name="fatherName"
            placeholder="Your Father Name"
          />

          <Input
            type="text"
            value={motherName}
            label="Mother Name"
            readonly={true}
            name="motherName"
            placeholder="Your Mother Name"
          />

          <Input
            type="text"
            value={emergencyPhone}
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
