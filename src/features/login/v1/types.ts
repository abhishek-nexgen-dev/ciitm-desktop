import { LOGIN_FEATURE_CONSTANTS } from "./constants";

export type LoginFeatureName = typeof LOGIN_FEATURE_CONSTANTS.name;
export type LoginFeatureVersion = typeof LOGIN_FEATURE_CONSTANTS.version;
export type LoginFeatureId = `${LoginFeatureName}:${LoginFeatureVersion}`;
