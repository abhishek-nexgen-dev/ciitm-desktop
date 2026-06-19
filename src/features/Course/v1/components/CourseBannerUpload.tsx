import { ImagePlus } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { useRef, useState } from "react";

type CourseBannerUploadProps = {
  onImageChange?: (file: File | null) => void;
};

export function CourseBannerUpload({ onImageChange }: CourseBannerUploadProps) {
  const [courseImage, setCourseImage] = useState<File | null>(null);

  const ImageRef = useRef<HTMLInputElement | null>(null);

  const onImageUploadClick = () => {
    if (ImageRef.current) {
      ImageRef.current.click();
    }
  };

  return (
    <section className="space-y-6">
      <SectionTitle number="01" title="Course Visual Identity" />

      <input
        ref={ImageRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setCourseImage(e.target.files[0]);
            onImageChange?.(e.target.files[0]);
          }
        }}
        className="hidden"
        id="course-banner-upload"
      />

      <div
        onClick={onImageUploadClick}
        className="relative   py-[3vh] overflow-hidden rounded-xl border border-dashed border-blue-500/40 bg-zinc-950"
      >
        <div className="flex h-[28vh]  flex-col items-center justify-center">
          {courseImage ? (
            <img
              src={URL.createObjectURL(courseImage)}
              alt="Course Banner"
              className=" w-full object-fill "
            />
          ) : (
            <>
              <ImagePlus size={50} className="text-blue-400" />

              <p className="mt-4 font-medium text-white">Upload Course Banner</p>

              <p className="mt-2 text-sm text-zinc-500">Recommended resolution: 1200 × 600px</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
