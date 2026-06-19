import DropDown from "../../../../Components/DropDown";
import Input from "../../../../Components/Input";
import useCourseForm from "../hooks/useCourseForm";

import { SectionTitle } from "./SectionTitle";

export function ProgramConfiguration() {
  const { watch, setValue, formState } = useCourseForm();
  const { errors } = formState;

  return (
    <section className="space-y-6">
      <SectionTitle number="02" title="Program Configuration" />

      <div className="grid gap-6 md:grid-cols-2">
        {/* <Field label="Course Title" placeholder="Master of Artificial Intelligence" /> */}
        <Input
          label="Course Title"
          placeholder="Master of Artificial Intelligence"
          name="courseTitle"
          value={watch("courseName")}
          readonly={false}
          error={errors.courseName?.message}
          onChange={(name, value) => setValue("courseName", value)}
        />

        {/* <Field label="Internal Reference Code" placeholder="MDS-PR-2025" /> */}
        <Input
          label="Internal Reference Code"
          placeholder="MDS-PR-2025"
          name="courseCode"
          value={watch("courseCode")}
          error={errors.courseCode?.message}
          readonly={false}
          onChange={(name, value) => setValue("courseCode", value)}
        />

        {/* <Input
          label="Program Fee"
          placeholder="Rs 1,00,000"
          error={errors.coursePrice?.message}
          name="coursePrice"
          value={watch("coursePrice")}
          readonly={false}
          onChange={(name, value) => setValue(name as "coursePrice", Number(value))}
        /> */}
        <DropDown
          label="Department"
          error={errors.Department?.message}
          options={[
            "Computer Science",
            "Information Technology",
            "Electronics and Communication",
            "Mechanical Engineering",
            "Civil Engineering",
            "Electrical Engineering",
            "Chemical Engineering",
            "Aerospace Engineering",
            "Biomedical Engineering",
            "Industrial Engineering",
            "Materials Science and Engineering",
            "Nuclear Engineering",
            "Petroleum Engineering",
            "Environmental Engineering",
            "Agricultural Engineering",
          ]}
          value={watch("Department")}
          onSelect={(value) => setValue("Department", value)}
        />

        <DropDown
          label="Admission Duration"
          error={errors.courseDuration?.message}
          options={["1 Month", "2 Months", "3 Months", "4 Months"]}
          value={watch("courseDuration")}
          onSelect={(value) => setValue("courseDuration", value)}
        />
      </div>
    </section>
  );
}
