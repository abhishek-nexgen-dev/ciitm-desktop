import React, { useState } from "react";
import CoursePagination from "./CoursePagination";
import CourseTableRow from "./CourseTableRow";
import useCourseStore from "../store/course.store";

const totalEntries = 28;
const entriesPerPage = 4;

const CourseTable: React.FC = () => {
  const course = useCourseStore((state) => state.course);

  console.log("course", course);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-[#121212] text-white rounded-lg shadow-md max-w-full overflow-x-auto mt-[4vh]">
      <table className="min-w-full border-collapse border border-zinc-800  text-sm">
        <thead>
          <tr className="bg-black border-b border-zinc-800 text-left text-md uppercase text-gray-400">
            <th className="px-3 py-4 ">CODE</th>
            <th className="px-3 py-4">COURSE NAME</th>

            <th className="px-3 py-4 ">PROGRAM FEE</th>
            <th className="px-3 py-4 ">DURATION</th>

            <th className="px-3 py-4 ">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {course.map((course) => (
            <CourseTableRow key={course.courseCode} course={course} />
          ))}
        </tbody>
      </table>

      <CoursePagination
        currentPage={currentPage}
        entriesPerPage={entriesPerPage}
        totalEntries={totalEntries}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CourseTable;
