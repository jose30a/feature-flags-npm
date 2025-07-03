import { SetMetadata } from '@nestjs/common';

export const FEATURE_ENABLED_KEY = 'featureEnabled';

export const FeatureEnabled = (feature: string) =>
  SetMetadata(FEATURE_ENABLED_KEY, feature);
