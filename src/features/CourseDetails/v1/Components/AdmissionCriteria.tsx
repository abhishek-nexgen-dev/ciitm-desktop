import { CheckCircle2, FileText, CalendarDays, GraduationCap } from "lucide-react";
import Card from "./Card";

export default function AdmissionCriteria() {
  return (
    <Card className="p-8">
      <div className="flex items-center gap-3">
        <GraduationCap className="text-violet-400" />

        <h2 className="text-2xl font-bold text-white">Admission Criteria</h2>
      </div>

      <p className="mt-4 leading-7 text-zinc-400">
        Applicants must satisfy the minimum eligibility requirements, submit the required academic
        documents, and complete the admission process before the application deadline.
      </p>

      {/* Eligibility */}

      <section className="mt-8">
        <h3 className="mb-4 text-lg font-semibold text-white">Eligibility</h3>

        <div className="space-y-4">
          <Item>
            Bachelor's Degree in Computer Science, Mathematics, Statistics, Engineering or related
            discipline.
          </Item>

          <Item>Minimum 55% aggregate marks from a recognized university.</Item>

          <Item>Final-year students may also apply.</Item>

          <Item>Good analytical and programming skills are preferred.</Item>
        </div>
      </section>

      {/* Documents */}

      <section className="mt-10">
        <div className="mb-4 flex items-center gap-3">
          <FileText className="text-violet-400" size={20} />

          <h3 className="text-lg font-semibold text-white">Required Documents</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DocumentCard title="10th Marksheet" />

          <DocumentCard title="12th Marksheet" />

          <DocumentCard title="Graduation Transcript" />

          <DocumentCard title="Transfer Certificate" />

          <DocumentCard title="Passport Photo" />

          <DocumentCard title="Identity Proof" />
        </div>
      </section>

      {/* Timeline */}

      <section className="mt-10">
        <div className="mb-5 flex items-center gap-3">
          <CalendarDays className="text-violet-400" size={20} />

          <h3 className="text-lg font-semibold text-white">Admission Timeline</h3>
        </div>

        <div className="space-y-5">
          <Timeline date="01 June" title="Applications Open" />

          <Timeline date="15 July" title="Entrance Examination" />

          <Timeline date="25 July" title="Merit List Published" />

          <Timeline date="05 August" title="Classes Begin" />
        </div>
      </section>
    </Card>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <CheckCircle2 size={20} className="mt-1 text-green-500" />

      <p className="leading-7 text-zinc-300">{children}</p>
    </div>
  );
}

function DocumentCard({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
      <div className="flex items-center gap-3">
        <FileText size={18} className="text-violet-400" />

        <p className="font-medium text-zinc-200">{title}</p>
      </div>
    </div>
  );
}

function Timeline({ date, title }: { date: string; title: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-violet-500" />

        <div className="mt-1 h-full w-px bg-zinc-700" />
      </div>

      <div className="pb-6">
        <p className="text-sm text-violet-400">{date}</p>

        <h4 className="mt-1 font-semibold text-white">{title}</h4>
      </div>
    </div>
  );
}
