import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import CoursePagination from "./CoursePagination";
import CourseTableRow from "./CourseTableRow";

interface Course {
  code: string;
  courseName: string;
  courseSubtitle?: string;
  department: string;
  students: number;
  studentsBars: number; // number of bars to show in chart (0-4)
  programFee: string;
  duration: string;
  status: "ACTIVE" | "DRAFT";
}

const coursesData: Course[] = [
  {
    code: "CSE-2024-01",
    courseName: "B.Tech Computer Science",
    courseSubtitle: "Core Engineering Track",
    department: "Engineering",
    students: 452,
    studentsBars: 3,
    programFee: "Rs: 12,400 /Yr",
    duration: "4 Years",
    status: "ACTIVE",
  },
  {
    code: "BIO-2024-09",
    courseName: "M.Sc Molecular Biology",
    courseSubtitle: "Research Intensive",
    department: "Applied Sciences",
    students: 86,
    studentsBars: 2,
    programFee: "Rs: 15,800 /Yr",
    duration: "2 Years",
    status: "DRAFT",
  },
  {
    code: "FIN-2024-04",
    courseName: "MBA Corporate Finance",
    courseSubtitle: "Executive Leadership",
    department: "Business Admin",
    students: 212,
    studentsBars: 2,
    programFee: "Rs: 21,000 /Yr",
    duration: "2 Years",
    status: "ACTIVE",
  },
  {
    code: "MAT-2024-11",
    courseName: "B.Sc Computational Math",
    courseSubtitle: "Advanced Calculus Track",
    department: "Applied Sciences",
    students: 130,
    studentsBars: 4,
    programFee: "Rs: 9,800 /Yr",
    duration: "3 Years",
    status: "ACTIVE",
  },
];

const totalEntries = 28;
const entriesPerPage = 4;

const CourseTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Render bars for students count indicator
  const renderBars = (count: number) => {
    const bars = [];
    for (let i = 0; i < 4; i++) {
      bars.push(
        <span
          key={i}
          className={`inline-block w-1.5 h-3 mr-0.5 rounded-sm Rs: {
            i < count ? "bg-blue-500" : "bg-gray-700"
          }`}
        />,
      );
    }
    return bars;
  };

  return (
    <div className="bg-[#121212] text-white rounded-md shadow-md max-w-full overflow-x-auto mt-[4vh]">
      <table className="min-w-full border-collapse border border-gray-700 text-sm">
        <thead>
          <tr className="bg-black border-b border-gray-700 text-left text-md uppercase text-gray-400">
            <th className="px-3 py-4 ">CODE</th>
            <th className="px-3 py-4">COURSE NAME</th>
            <th className="px-3 py-4 ">DEPARTMENT</th>
            <th className="px-3 py-4">STUDENTS</th>
            <th className="px-3 py-4 ">PROGRAM FEE</th>
            <th className="px-3 py-4 ">DURATION</th>
            <th className="px-3 py-4 ">STATUS</th>
            <th className="px-3 py-4 ">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {coursesData.map((course) => (
            <CourseTableRow key={course.code} course={course} renderBars={renderBars} />
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
