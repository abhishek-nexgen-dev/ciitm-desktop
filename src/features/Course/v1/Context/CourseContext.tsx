import { createContext } from "react";
import { CourseContextType } from "../components/CourseWrapper";

const CourseContext = createContext<CourseContextType | null>(null);

export default CourseContext;
