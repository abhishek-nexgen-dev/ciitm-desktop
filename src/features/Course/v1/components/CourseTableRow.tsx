import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Course } from "../store/course.store";

interface CourseTableRowProps {
  course: Course;
}

const CourseTableRow: React.FC<CourseTableRowProps> = ({ course }) => {
  return (
    <tr className="border-b  border-zinc-800  hover:bg-black/20 transition-colors duration-200">
      <td className="px-3 py-3 font-mono text-blue-400 whitespace-pre-line">{course.courseCode}</td>
      <td className="px-3 py-3">
        <div className="font-semibold text-[1vw]">{course.courseName}</div>
      </td>

      <td className="px-3 py-3 text-[0.8vw] font-mono text-gray-300">{course.coursePrice}</td>
      <td className="px-3 py-3 text-gray-300 text-[0.8vw]">{course.courseDuration}</td>

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
