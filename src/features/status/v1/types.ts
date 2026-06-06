import { STATUS_FEATURE_CONSTANTS } from "./constants";

export type StatusFeatureName = typeof STATUS_FEATURE_CONSTANTS.name;
export type StatusFeatureVersion = typeof STATUS_FEATURE_CONSTANTS.version;
export type StatusFeatureId = `${StatusFeatureName}:${StatusFeatureVersion}`;
