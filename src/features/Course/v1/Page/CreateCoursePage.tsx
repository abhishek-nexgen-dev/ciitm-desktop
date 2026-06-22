import { ToastContainer } from "react-toastify";

import CourseWrapper from "../components/CourseWrapper";

import CourseForm from "../components/CourseForm";

function CreateCoursePage() {
  return (
    <CourseWrapper>
      <ToastContainer />
      <CourseForm />
    </CourseWrapper>
  );
}

export default CreateCoursePage;
