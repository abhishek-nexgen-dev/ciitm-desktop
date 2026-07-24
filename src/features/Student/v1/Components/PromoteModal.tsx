import { X, ArrowUpCircle, ArrowDownCircle } from "lucide-react";

interface PromoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  currentSemester: number;
  onPromote: () => void;
  onDemote: () => void;
}

export default function PromoteModal({
  isOpen,
  onClose,
  studentName,
  currentSemester,
  onPromote,
  onDemote,
}: PromoteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-800 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-5">
          <h2 className="text-xl font-semibold">Promote / Demote Student</h2>

          <p className="mt-1 text-sm text-zinc-500">Manage the student's semester.</p>
        </div>

        {/* Body */}
        <div className="space-y-5 px-6 py-6">
          <div>
            <p className="text-sm text-zinc-500">Student</p>
            <p className="font-semibold">{studentName}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Current Semester</p>
            <p className="text-2xl font-bold">Semester {currentSemester}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={onPromote}
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-medium text-white transition hover:bg-green-700"
            >
              <ArrowUpCircle size={20} />
              Promote
            </button>

            <button
              onClick={onDemote}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-medium text-white transition hover:bg-red-700"
            >
              <ArrowDownCircle size={20} />
              Demote
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-zinc-200 dark:border-zinc-800 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
