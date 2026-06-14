import { ImagePlus } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export function CourseBannerUpload() {
  return (
    <section className="space-y-6">
      <SectionTitle number="01" title="Course Visual Identity" />

      <div className="relative overflow-hidden rounded-xl border border-dashed border-blue-500/40 bg-zinc-950">
        <div className="flex h-[260px] flex-col items-center justify-center">
          <ImagePlus size={50} className="text-blue-400" />

          <p className="mt-4 font-medium text-white">Upload Course Banner</p>

          <p className="mt-2 text-sm text-zinc-500">Recommended resolution: 1200 × 600px</p>
        </div>
      </div>
    </section>
  );
}
