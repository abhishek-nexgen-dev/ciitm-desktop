import { DASHBOARD_FEATURE_CONSTANTS } from "./constants";

export type DashboardFeatureName = typeof DASHBOARD_FEATURE_CONSTANTS.name;
export type DashboardFeatureVersion = typeof DASHBOARD_FEATURE_CONSTANTS.version;
export type DashboardFeatureId = `${DashboardFeatureName}:${DashboardFeatureVersion}`;
