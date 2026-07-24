import ManageCourseTitle from "../components/ManageCourseTitle";
import CourseTable from "../components/CourseTable";

import api from "../../../../Utils/api.utils";
import { useEffect } from "react";
import useCourseStore from "../store/course.store";

const ManageCoursePage = () => {
  useEffect(() => {
    const fetchLatestCourse = async () => {
      const res = await api.get("/api/v1/user/findAllCourse");
      useCourseStore.getState().setCourse(res.data.data);
    };

    fetchLatestCourse();
  }, []);

  return (
    <div className="manage-course-page  min-h-screen flex flex-col bg-black text-white p-6 lg:p-[3vw]">
      <ManageCourseTitle />

      <CourseTable />
    </div>
  );
};

export default ManageCoursePage;
