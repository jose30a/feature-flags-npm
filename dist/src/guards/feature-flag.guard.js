"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFlagGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const feature_flag_service_1 = require("../feature-flag.service");
const feature_enabled_decorator_1 = require("../decorators/feature-enabled.decorator");
let FeatureFlagGuard = class FeatureFlagGuard {
    constructor(reflector, featureFlagService) {
        this.reflector = reflector;
        this.featureFlagService = featureFlagService;
    }
    canActivate(context) {
        const feature = this.reflector.get(feature_enabled_decorator_1.FEATURE_ENABLED_KEY, context.getHandler());
        if (!feature) {
            return true;
        }
        return this.featureFlagService.isEnabled(feature);
    }
};
exports.FeatureFlagGuard = FeatureFlagGuard;
exports.FeatureFlagGuard = FeatureFlagGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        feature_flag_service_1.FeatureFlagService])
], FeatureFlagGuard);
//# sourceMappingURL=feature-flag.guard.js.map