"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureEnabled = exports.FEATURE_ENABLED_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.FEATURE_ENABLED_KEY = 'featureEnabled';
const FeatureEnabled = (feature) => (0, common_1.SetMetadata)(exports.FEATURE_ENABLED_KEY, feature);
exports.FeatureEnabled = FeatureEnabled;
//# sourceMappingURL=feature-enabled.decorator.js.map