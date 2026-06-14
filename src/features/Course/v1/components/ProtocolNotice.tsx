import { Info } from "lucide-react";

export function ProtocolNotice() {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex gap-4">
        <Info size={18} className="text-blue-400" />

        <div>
          <h3 className="font-medium text-white">Course Registration Protocol</h3>

          <p className="mt-2 text-sm text-zinc-400">
            Please ensure all administrative fields are completed according to the latest academic
            guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
