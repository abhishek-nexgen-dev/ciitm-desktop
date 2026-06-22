import React from "react";

import useCourseForm from "../hooks/useCourseForm";
import CourseContext from "../Context/CourseContext";

export type CourseContextType = ReturnType<typeof useCourseForm>;

type CourseWrapperProps = {
  children: React.ReactNode;
};

const CourseWrapper = ({ children }: CourseWrapperProps) => {
  const formMethods = useCourseForm();

  console.log("Wrapper rendered");

  return <CourseContext.Provider value={formMethods}>{children}</CourseContext.Provider>;
};

export default CourseWrapper;
