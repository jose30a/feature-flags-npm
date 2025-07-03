# Feature Flags NPM Package

Feature Flags es un paquete ligero y modular que permite gestionar activación de funcionalidades de forma dinámica, compatible con **NestJS**.

## ✨ Uso en NestJS
1. Importar el módulo en tu aplicación NestJS
import { Module } from '@nestjs/common';
import { FeatureFlagModule } from 'feature-flags-npm';

@Module({
  imports: [FeatureFlagModule],
})
export class AppModule {}


2. Configurar en tu servicio principal
import { FeatureFlagService } from 'feature-flags-npm';

constructor(private featureFlagService: FeatureFlagService) {
  this.featureFlagService.configure({
    environment: 'development',
    features: {
      newFeature: true,
      betaFeature: false,
    },
  });
}

3. Usar el decorator en tus controllers
import { Controller, Get, UseGuards } from '@nestjs/common';
import { FeatureEnabled, FeatureFlagGuard } from 'feature-flags-npm';

@Controller('example')
export class ExampleController {
  @Get('beta')
  @FeatureEnabled('betaFeature')
  @UseGuards(FeatureFlagGuard)
  getBetaFeature() {
    return { message: 'Beta feature is enabled!' };
  }
}


---

## 📦 Instalación

npm install jose30a/feature-flags-npm
