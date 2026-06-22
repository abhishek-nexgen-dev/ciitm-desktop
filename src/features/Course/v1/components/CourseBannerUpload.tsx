import { ImagePlus } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { useRef, useState } from "react";
import useCourseFormContext from "../hooks/useCourseFormContext";
import { useFormState } from "react-hook-form";
import clsx from "clsx";

type CourseBannerUploadProps = {
  onImageChange?: (file: File | null) => void;
};

export function CourseBannerUpload({ onImageChange }: CourseBannerUploadProps) {
  const [courseImage, setCourseImage] = useState<File | null>(null);

  const { watch, setValue, control } = useCourseFormContext();

  const { errors } = useFormState({
    control,
  });

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
            setValue("courseImage", e.target.files[0]);
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
              src={URL.createObjectURL(watch("courseImage") as File)}
              alt="Course Banner"
              className=" w-full object-fill "
            />
          ) : (
            <>
              <ImagePlus size={50} className="text-blue-400" />

              <p className="mt-4 font-medium text-white">Upload Course Banner</p>

              <p className={clsx("text-sm ", errors.courseImage?.message && "text-red-500")}>
                {errors.courseImage
                  ? errors.courseImage.message
                  : "Recommended dimensions: 1200x600px. Max size: 2MB."}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
