"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feature_flag_service_1 = require("../src/feature-flag.service");
describe('FeatureFlagService', () => {
    let service;
    beforeEach(() => {
        service = new feature_flag_service_1.FeatureFlagService();
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
