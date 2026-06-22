import { Controller, useFormState } from "react-hook-form";

import DropDown from "../../../../Components/DropDown";
import Input from "../../../../Components/Input";
import useCourseFormContext from "../hooks/useCourseFormContext";
import { SectionTitle } from "./SectionTitle";

export function ProgramConfiguration() {
  const { control } = useCourseFormContext();

  const { errors } = useFormState({
    control,
  });

  console.log("Errors : -------->", errors);

  return (
    <section className="space-y-6">
      <SectionTitle number="02" title="Program Configuration" />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Course Title */}
        <Controller
          name="courseName"
          control={control}
          render={({ field }) => (
            <Input
              label="Course Title"
              name={field.name}
              placeholder="Master of Artificial Intelligence"
              value={field.value ?? ""}
              readonly={false}
              error={errors.courseName?.message}
              onChange={(_, value) => field.onChange(value)}
            />
          )}
        />

        {/* Course Code */}
        <Controller
          name="courseCode"
          control={control}
          render={({ field }) => (
            <Input
              label="Internal Reference Code"
              name={field.name}
              placeholder="MDS-PR-2025"
              value={field.value ?? ""}
              readonly={false}
              error={errors.courseCode?.message}
              onChange={(_, value) => field.onChange(value)}
            />
          )}
        />

        {/* Department */}
        <Controller
          name="Department"
          control={control}
          render={({ field }) => (
            <DropDown
              label="Department"
              value={field.value}
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
              onSelect={field.onChange}
            />
          )}
        />

        {/* Duration */}
        <Controller
          name="courseDuration"
          control={control}
          render={({ field }) => (
            <DropDown
              label="Admission Duration"
              value={field.value}
              error={errors.courseDuration?.message}
              options={["1 Month", "2 Months", "3 Months", "4 Months"]}
              onSelect={field.onChange}
            />
          )}
        />
      </div>
    </section>
  );
}
