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
    <div className="manage-course-page w-full bg-[#07080C] text-white p-3.5 sm:p-6 lg:p-8 flex flex-col">
      <div className="max-w-7xl mx-auto w-full">
        <ManageCourseTitle />
        <CourseTable />
      </div>
    </div>
  );
};

export default ManageCoursePage;
