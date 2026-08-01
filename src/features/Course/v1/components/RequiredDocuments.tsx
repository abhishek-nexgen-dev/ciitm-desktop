import { FileText, Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormState } from "react-hook-form";

import useCourseFormContext from "../hooks/useCourseFormContext";
import { SectionTitle } from "./SectionTitle";

export function RequiredDocuments() {
  const { register, control } = useCourseFormContext();

  const { errors } = useFormState({
    control,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "RequiredDocuments",
  });

  const addDocument = () => {
    append("");
  };

  return (
    <section className="space-y-6">
      <SectionTitle number="04" title="Required Documents" />

      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <div className="space-y-3">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-black p-3"
            >
              <FileText size={18} className="shrink-0 text-violet-400" />

              <input
                {...register(`RequiredDocuments.${index}`)}
                placeholder="Enter required document"
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

        {errors.RequiredDocuments && (
          <p className="mt-2 text-sm text-red-500">{errors.RequiredDocuments.message as string}</p>
        )}

        <button
          type="button"
          onClick={addDocument}
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
            hover:border-violet-500
            hover:text-violet-400
          "
        >
          <Plus size={16} />
          Add Required Document
        </button>
      </div>
    </section>
  );
}
