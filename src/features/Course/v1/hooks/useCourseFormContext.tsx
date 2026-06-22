import { useContext } from "react";
import CourseContext from "../Context/CourseContext";

const useCourseFormContext = () => {
  const context = useContext(CourseContext);

  if (!context) {
    throw new Error("useCourseFormContext must be used within a CourseWrapper");
  }

  return context;
};

export default useCourseFormContext;
