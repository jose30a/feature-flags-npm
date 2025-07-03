import { Injectable } from '@nestjs/common';
import { FeatureFlagConfig, FeatureFlags } from './types/feature-flag.types';

@Injectable()
export class FeatureFlagService {
  private flags: FeatureFlags;

  constructor() {
    this.flags = {
      environment: process.env.NODE_ENV || 'development',
      features: {},
    };
  }

  /**
   * Configura el servicio con un objeto de flags.
   * @param config Configuración de Feature Flags
   */
  configure(config: FeatureFlagConfig) {
    this.flags = config;
  }

  /**
   * Verifica si una feature está habilitada.
   * @param feature Nombre de la feature
   * @returns boolean
   */
  isEnabled(feature: string): boolean {
    return this.flags.features[feature] === true;
  }

  /**
   * Devuelve el entorno configurado.
   * @returns string
   */
  getEnvironment(): string {
    return this.flags.environment;
  }
}
