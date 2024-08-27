"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewTokenModule = void 0;
const common_1 = require("@nestjs/common");
const get_new_token_controller_1 = require("./get-new-token.controller");
const auth_service_1 = require("../auth/auth.service");
const auth_module_1 = require("../auth/auth.module");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let GetNewTokenModule = class GetNewTokenModule {
};
exports.GetNewTokenModule = GetNewTokenModule;
exports.GetNewTokenModule = GetNewTokenModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, config_1.ConfigModule],
        providers: [get_new_token_controller_1.GetNewTokenController, auth_service_1.AuthService, jwt_1.JwtService],
        exports: [get_new_token_controller_1.GetNewTokenController],
    })
], GetNewTokenModule);
//# sourceMappingURL=get-new-token.module.js.map