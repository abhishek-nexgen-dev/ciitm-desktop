import React from "react";
import Card from "./Card";
import { Badge, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import EducationItem from "./EducationItem";

function AcademicCredentials() {
  return (
    <Card>
      <SectionTitle icon={<GraduationCap size={16} />} title="Academic Credentials" />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase text-zinc-500">Previous Education</p>

          <div className="mt-4 space-y-4">
            <EducationItem title="12th Board Examination" score="94.2%" />

            <EducationItem title="10th Board Examination" score="90.8%" />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase text-zinc-500">Current Institution</p>

          <div className="mt-4">
            <h3 className="text-white">Chhotanagpur Institute of IT & Management</h3>

            <Badge className="mt-3">Full Time Regular</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AcademicCredentials;
