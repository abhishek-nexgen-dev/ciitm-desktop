import { create } from "zustand";

export interface Course {
  AdmissionCriteria: [];
  courseName: string;
  image: string;
  courseCode: string;
  courseDescription: string;
  courseDuration: string;
  courseEligibility: string;
  courseThumbnail: string;
  coursePrice: number;
}

interface CourseStore {
  course: Course[];

  setCourse: (course: Course[]) => void;
}

const useCourseStore = create<CourseStore>((set) => ({
  course: [],

  setCourse: (course) => {
    set({
      course,
    });
  },
}));

export default useCourseStore;
