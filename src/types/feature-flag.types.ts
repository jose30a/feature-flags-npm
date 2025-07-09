export interface FeatureFlags {
  environment: string;
  features: { [key: string]: boolean };
}

export interface FeatureFlagConfig extends FeatureFlags {}
