"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./login.service");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let LoginModule = class LoginModule {
};
exports.LoginModule = LoginModule;
exports.LoginModule = LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    secret: configService.get('SECRET'),
                    signOptions: { expiresIn: '60s' },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [login_service_1.LoginService, prisma_service_1.PrismaService],
        exports: [login_service_1.LoginService],
    })
], LoginModule);
//# sourceMappingURL=login.module.js.map