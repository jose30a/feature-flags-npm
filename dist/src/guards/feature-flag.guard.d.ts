import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FeatureFlagService } from '../feature-flag.service';
export declare class FeatureFlagGuard implements CanActivate {
    private reflector;
    private featureFlagService;
    constructor(reflector: Reflector, featureFlagService: FeatureFlagService);
    canActivate(context: ExecutionContext): boolean;
}
