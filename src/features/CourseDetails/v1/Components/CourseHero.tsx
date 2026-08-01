import { Building2 } from "lucide-react";
import Badge from "./Badge";

interface CourseHeroProps {
  title: string;
  department: string;
  image: string;
}

export default function CourseHero({ title, department, image }: CourseHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-800">
      {/* Background Image */}
      <img src={image} alt={title} className="h-[320px] w-full object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090bc0] to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8">
        <Badge>Postgraduate Program</Badge>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-white">{title}</h1>

        <div className="mt-3 flex items-center gap-2 text-zinc-300">
          <Building2 size={18} />

          <span>{department}</span>
        </div>

        <div className="mt-6 flex gap-3">
          <div className="rounded-lg border border-zinc-700 bg-black/40 px-4 py-2 backdrop-blur-md">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Duration</p>

            <p className="mt-1 font-semibold text-white">2 Years</p>
          </div>

          <div className="rounded-lg border border-zinc-700 bg-black/40 px-4 py-2 backdrop-blur-md">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Degree</p>

            <p className="mt-1 font-semibold text-white">M.Sc</p>
          </div>

          <div className="rounded-lg border border-zinc-700 bg-black/40 px-4 py-2 backdrop-blur-md">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Mode</p>

            <p className="mt-1 font-semibold text-white">Full Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
