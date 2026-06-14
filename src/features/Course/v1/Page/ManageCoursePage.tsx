import React from "react";

import ManageCourseFilter from "../components/ManageCourseFilter";
import ManageCourseTitle from "../components/ManageCourseTitle";
import CourseTable from "../components/CourseTable";

const ManageCoursePage = () => {
  return (
    <div className="manage-course-page  min-h-screen flex flex-col bg-black text-white p-6 lg:p-[3vw]">
      <ManageCourseTitle />

      <ManageCourseFilter
        academicYears={["2023-2024", "2024-2025", "2025-2026"]}
        departments={[]}
        programLevels={[]}
        onFilterChange={(filters) => console.log(filters)}
      />

      <CourseTable />
    </div>
  );
};

export default ManageCoursePage;
