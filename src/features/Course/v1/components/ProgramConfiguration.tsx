import { Field } from "./Field";
import { SectionTitle } from "./SectionTitle";
import { SelectField } from "./SelectField";

export function ProgramConfiguration() {
  return (
    <section className="space-y-6">
      <SectionTitle number="02" title="Program Configuration" />

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Course Title" placeholder="Master of Artificial Intelligence" />

        <Field label="Internal Reference Code" placeholder="MDS-PR-2025" />

        <Field label="Program Fee" placeholder="$ 0.00" />

        <SelectField
          label="Academic Duration"
          options={["1 Year", "2 Years", "3 Years", "4 Years"]}
        />
      </div>
    </section>
  );
}
