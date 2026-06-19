import { Bold, Italic, Link2 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import useCourseForm from "../hooks/useCourseForm";

export function ProgramDescription() {
  const { watch, setValue } = useCourseForm();
  return (
    <section className="space-y-6">
      <SectionTitle number="04" title="Program Description" />

      <div className="overflow-hidden rounded-xl border border-zinc-800">
        <div className="flex gap-2 border-b border-zinc-800 p-4">
          <button>
            <Bold size={16} />
          </button>

          <button>
            <Italic size={16} />
          </button>

          <button>
            <Link2 size={16} />
          </button>
        </div>

        <textarea
          value={watch("courseDescription")}
          onChange={(e) => {
            const value = e.target.value;
            setValue("courseDescription", value);
          }}
          rows={12}
          placeholder="Describe the curriculum, learning modules, and career pathways available to students..."
          className="w-full resize-none bg-zinc-950 p-5 text-zinc-200 outline-none"
        />
      </div>
    </section>
  );
}
