import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export function AdmissionCriteria() {
  return (
    <section className="space-y-6">
      <SectionTitle number="03" title="Admission Criteria" />

      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <div className="space-y-3">
          {[
            "Bachelor's degree in Computer Science or related field",
            "Minimum 60% aggregate in qualifying examination",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg bg-black p-4">
              <CheckCircle2 size={18} className="text-blue-400" />

              <span className="text-zinc-300">{item}</span>
            </div>
          ))}
        </div>

        <button className="mt-4 w-full rounded-lg border border-dashed border-zinc-700 py-4 text-sm text-zinc-400">
          + Add Admission Criterion
        </button>
      </div>
    </section>
  );
}
