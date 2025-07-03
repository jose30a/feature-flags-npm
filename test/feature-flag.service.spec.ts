import { FeatureFlagService } from '../src/feature-flag.service';

describe('FeatureFlagService', () => {
  let service: FeatureFlagService;

  beforeEach(() => {
    service = new FeatureFlagService();
  });

  it('should return false if feature is not enabled', () => {
    expect(service.isEnabled('newFeature')).toBe(false);
  });

  it('should return true if feature is enabled', () => {
    service.configure({
      environment: 'test',
      features: { newFeature: true },
    });
    expect(service.isEnabled('newFeature')).toBe(true);
  });
});
