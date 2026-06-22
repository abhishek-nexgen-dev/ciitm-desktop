import React from "react";
import { ProgramDescription } from "./ProgramDescription";
import { AdmissionCriteria } from "./AdmissionCriteria";
import { ProgramConfiguration } from "./ProgramConfiguration";
import { CourseBannerUpload } from "./CourseBannerUpload";
import { ProtocolNotice } from "./ProtocolNotice";
import { CoursePageHeader } from "./CoursePageHeader";
import { toast, ToastContainer } from "react-toastify";
import useCourseFormContext from "../hooks/useCourseFormContext";
import { CourseSchema } from "../Validations/CreateCourse.Validate";

const CourseForm = () => {
  const { handleSubmit } = useCourseFormContext();

  const onSubmit = (data: CourseSchema) => {
    console.log(data);
    alert("Course Created Successfully!");
  };

  const onError = () => {
    // console.log("Validation Errors:", errors);
    toast.error("Please fix the validation errors before submitting.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="min-h-screen bg-[#0A0A0A]">
      <ToastContainer />
      <CoursePageHeader />

      <div className="mx-auto max-w-7xl space-y-8 p-6">
        <ProtocolNotice />

        <CourseBannerUpload />

        <ProgramConfiguration />

        <AdmissionCriteria />

        <ProgramDescription />
      </div>
    </form>
  );
};

export default CourseForm;
