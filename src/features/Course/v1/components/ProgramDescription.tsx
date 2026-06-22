import { Bold, Italic, Link2 } from "lucide-react";
import { Controller, useFormState } from "react-hook-form";
import clsx from "clsx";

import useCourseFormContext from "../hooks/useCourseFormContext";
import { SectionTitle } from "./SectionTitle";

export function ProgramDescription() {
  const { control } = useCourseFormContext();

  const { errors } = useFormState({
    control,
  });

  console.log("Course Description Errors:", errors);

  return (
    <section className="space-y-6">
      <SectionTitle number="04" title="Program Description" />

      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
        {/* Toolbar */}
        <div className="flex gap-2 border-b border-zinc-800 p-4">
          <button
            type="button"
            className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            <Bold size={16} />
          </button>

          <button
            type="button"
            className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            <Italic size={16} />
          </button>

          <button
            type="button"
            className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            <Link2 size={16} />
          </button>
        </div>

        {errors.courseDescription && (
          <p className="px-4 pt-2 text-sm text-red-500">{errors.courseDescription.message}</p>
        )}

        {/* Textarea */}
        <Controller
          name="courseDescription"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              rows={12}
              placeholder="Describe the curriculum, learning modules, and career pathways available to students..."
              className={clsx(
                "w-full resize-none border-0 bg-transparent p-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:ring-0",
                errors.courseDescription && "border-red-500",
              )}
            />
          )}
        />
      </div>
    </section>
  );
}
