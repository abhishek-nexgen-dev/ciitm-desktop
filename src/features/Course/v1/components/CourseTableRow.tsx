import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export interface Course {
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

interface CourseTableRowProps {
  course: Course;
  renderBars: (count: number) => React.ReactNode;
}

const CourseTableRow: React.FC<CourseTableRowProps> = ({ course, renderBars }) => {
  return (
    <tr className="border-b border-gray-500 hover:bg-black/20 transition-colors duration-200">
      <td className="px-3 py-3 font-mono text-blue-400 whitespace-pre-line">{course.code}</td>
      <td className="px-3 py-3">
        <div className="font-semibold text-[1vw]">{course.courseName}</div>
        {course.courseSubtitle && (
          <div className="text-gray-400 text-[0.8vw] mt-0.5">{course.courseSubtitle}</div>
        )}
      </td>
      <td className="px-3 py-3 text-gray-300 text-[0.8vw]">{course.department}</td>
      <td className="px-3 py-3 flex items-center gap-1 font-mono text-gray-300">
        {course.students}
        <div className="flex">{renderBars(course.studentsBars)}</div>
      </td>
      <td className="px-3 py-3 text-[0.8vw] font-mono text-gray-300">{course.programFee}</td>
      <td className="px-3 py-3 text-gray-300 text-[0.8vw]">{course.duration}</td>
      <td className="px-3 py-3">
        <span
          className={`px-2 py-0.5 rounded text-xs font-semibold ${
            course.status === "ACTIVE" ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-300"
          }`}
        >
          {course.status}
        </span>
      </td>
      <td className="px-3 py-3 flex items-center gap-3 text-gray-400">
        <button
          aria-label={`View ${course.courseName}`}
          className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          <FaEye />
        </button>
        <button
          aria-label={`Edit ${course.courseName}`}
          className="hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
        >
          <FaEdit />
        </button>
        <button
          aria-label={`Delete ${course.courseName}`}
          className="hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default CourseTableRow;
