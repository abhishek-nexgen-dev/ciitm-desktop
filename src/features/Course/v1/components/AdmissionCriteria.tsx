import { CheckCircle2, Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormState } from "react-hook-form";

import useCourseFormContext from "../hooks/useCourseFormContext";
import { SectionTitle } from "./SectionTitle";

export function AdmissionCriteria() {
  const { register, control } = useCourseFormContext();

  const { errors } = useFormState({
    control,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "AdmissionCriteria",
  });

  const addCriterion = () => {
    append("");
  };

  return (
    <section className="space-y-6">
      <SectionTitle number="03" title="Admission Criteria" />

      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <div className="space-y-3">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-black p-3"
            >
              <CheckCircle2 size={18} className="shrink-0 text-blue-400" />

              <input
                {...register(`AdmissionCriteria.${index}`)}
                placeholder="Enter admission criterion"
                className="
                  flex-1
                  bg-transparent
                  text-sm
                  text-zinc-100
                  outline-none
                  placeholder:text-zinc-600
                "
              />

              <button
                type="button"
                onClick={() => remove(index)}
                className="
                  rounded-md
                  p-2
                  text-zinc-500
                  transition-colors
                  hover:bg-zinc-800
                  hover:text-red-400
                "
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {errors.AdmissionCriteria && (
          <p className="mt-2 text-sm text-red-500">{errors.AdmissionCriteria.message as string}</p>
        )}

        <button
          type="button"
          onClick={addCriterion}
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-dashed
            border-zinc-700
            py-3
            text-sm
            text-zinc-400
            transition-colors
            hover:border-blue-500
            hover:text-blue-400
          "
        >
          <Plus size={16} />
          Add Admission Criterion
        </button>
      </div>
    </section>
  );
}
