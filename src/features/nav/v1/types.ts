import { NAV_FEATURE_CONSTANTS } from "./constants";

export type NavFeatureName = typeof NAV_FEATURE_CONSTANTS.name;
export type NavFeatureVersion = typeof NAV_FEATURE_CONSTANTS.version;
export type NavFeatureId = `${NavFeatureName}:${NavFeatureVersion}`;
