import { AdmissionCriteria } from "../components/AdmissionCriteria";
import { CourseBannerUpload } from "../components/CourseBannerUpload";
import { CoursePageHeader } from "../components/CoursePageHeader";
import { ProgramConfiguration } from "../components/ProgramConfiguration";
import { ProgramDescription } from "../components/ProgramDescription";
import { ProtocolNotice } from "../components/ProtocolNotice";
import useCourseForm from "../hooks/useCourseForm";
import { CourseSchema } from "../Validations/CreateCourse.Validate";

function CreateCoursePage() {
  const { handleSubmit } = useCourseForm();

  const onSubmit = (data: CourseSchema) => {
    alert("Course Created Successfully!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-[#0A0A0A]">
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
}

export default CreateCoursePage;
