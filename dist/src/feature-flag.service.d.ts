import { FeatureFlagConfig } from './types/feature-flag.types';
export declare class FeatureFlagService {
    private flags;
    constructor();
    configure(config: FeatureFlagConfig): void;
    isEnabled(feature: string): boolean;
    getEnvironment(): string;
}
