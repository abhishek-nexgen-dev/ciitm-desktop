import AdmissionCriteria from "./v1/Components/AdmissionCriteria";
import CourseHero from "./v1/Components/CourseHero";
import CourseSidebar from "./v1/Components/CourseSidebar";
import ProgramDescription from "./v1/Components/ProgramDescription";

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen bg-black ">
      <div className="mx-auto max-w-7xl p-8">
        <CourseHero
          title="M.Sc. Data Science & Analytics"
          department="Department of Advanced Computing"
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600"
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Left */}

          <div className="space-y-8 lg:col-span-8">
            <ProgramDescription />

            <AdmissionCriteria />
          </div>

          {/* Right */}

          <div className="lg:col-span-4">
            <CourseSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
