import Card from "./Card";
import StatCard from "./StatCard";

export default function ProgramDescription() {
  return (
    <Card className="p-8 ">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold text-white">Program Description</h2>

        <p className="mt-2 text-zinc-400 leading-7">
          Our Master of Science in Data Science & Analytics is designed to prepare students for
          careers in Artificial Intelligence, Machine Learning, Data Engineering, Cloud Computing,
          and Business Intelligence. The curriculum combines strong theoretical foundations with
          practical industry projects, internships, and research-oriented learning to ensure
          graduates become industry-ready professionals.
        </p>
      </div>

      {/* Statistics */}
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <StatCard label="Placement Rate" value="98%" />

        <StatCard label="Industry Partners" value="120+" />

        <StatCard label="Students Enrolled" value="4,500+" />
      </div>

      {/* Highlights */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-white">Program Highlights</h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Highlight text="Industry-oriented curriculum designed with top IT companies." />

          <Highlight text="Hands-on learning with real-world datasets and live projects." />

          <Highlight text="Dedicated placement assistance and internship opportunities." />

          <Highlight text="Expert faculty from academia and industry." />

          <Highlight text="Modern AI & Cloud Computing Labs." />

          <Highlight text="Research opportunities and hackathons." />
        </div>
      </div>
    </Card>
  );
}

function Highlight({ text }: { text: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500" />

      <p className="text-sm leading-6 text-zinc-300">{text}</p>
    </div>
  );
}
