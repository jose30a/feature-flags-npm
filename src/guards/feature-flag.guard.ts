import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FeatureFlagService } from '../feature-flag.service';
import { FEATURE_ENABLED_KEY } from '../decorators/feature-enabled.decorator';

@Injectable()
export class FeatureFlagGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private featureFlagService: FeatureFlagService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const feature = this.reflector.get<string>(
      FEATURE_ENABLED_KEY,
      context.getHandler(),
    );
    if (!feature) {
      return true; // Si no está decorado, permitir
    }
    return this.featureFlagService.isEnabled(feature);
  }
}
