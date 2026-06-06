import { PAYMENT_FEATURE_CONSTANTS } from "./constants";

export type PaymentFeatureName = typeof PAYMENT_FEATURE_CONSTANTS.name;
export type PaymentFeatureVersion = typeof PAYMENT_FEATURE_CONSTANTS.version;
export type PaymentFeatureId = `${PaymentFeatureName}:${PaymentFeatureVersion}`;
