import { AdmissionCriteria } from "../components/AdmissionCriteria";
import { CourseBannerUpload } from "../components/CourseBannerUpload";
import { CoursePageHeader } from "../components/CoursePageHeader";
import { ProgramConfiguration } from "../components/ProgramConfiguration";
import { ProgramDescription } from "../components/ProgramDescription";
import { ProtocolNotice } from "../components/ProtocolNotice";

function CreateCoursePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <CoursePageHeader />

      <div className="mx-auto max-w-7xl space-y-8 p-6">
        <ProtocolNotice />

        <CourseBannerUpload />

        <ProgramConfiguration />

        <AdmissionCriteria />

        <ProgramDescription />
      </div>
    </main>
  );
}

export default CreateCoursePage;
