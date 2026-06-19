import { useState } from "react";
import { CheckCircle2, Plus, Trash2 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export function AdmissionCriteria() {
  const [criteria, setCriteria] = useState<string[]>([
    "Bachelor's degree in Computer Science or related field",
    "Minimum 60% aggregate in qualifying examination",
  ]);

  const addCriterion = () => {
    setCriteria([...criteria, ""]);
  };

  const updateCriterion = (index: number, value: string) => {
    const updated = [...criteria];
    updated[index] = value;
    setCriteria(updated);
  };

  const removeCriterion = (index: number) => {
    setCriteria(criteria.filter((_, i) => i !== index));
  };

  return (
    <section className="space-y-6">
      <SectionTitle number="03" title="Admission Criteria" />

      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <div className="space-y-3">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-black p-3"
            >
              <CheckCircle2 size={18} className="shrink-0 text-blue-400" />

              <input
                value={item}
                onChange={(e) => updateCriterion(index, e.target.value)}
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
                onClick={() => removeCriterion(index)}
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
