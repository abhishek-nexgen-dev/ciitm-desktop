import { STUDENT_FEATURE_CONSTANTS } from "./constants";

export type StudentFeatureName = typeof STUDENT_FEATURE_CONSTANTS.name;
export type StudentFeatureVersion = typeof STUDENT_FEATURE_CONSTANTS.version;
export type StudentFeatureId = `${StudentFeatureName}:${StudentFeatureVersion}`;
