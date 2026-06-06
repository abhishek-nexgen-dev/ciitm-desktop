import { TEACHER_FEATURE_CONSTANTS } from "./constants";

export type TeacherFeatureName = typeof TEACHER_FEATURE_CONSTANTS.name;
export type TeacherFeatureVersion = typeof TEACHER_FEATURE_CONSTANTS.version;
export type TeacherFeatureId = `${TeacherFeatureName}:${TeacherFeatureVersion}`;
