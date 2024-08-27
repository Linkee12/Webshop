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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNewTokenController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("../auth/auth.service");
let GetNewTokenController = class GetNewTokenController {
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async getNewToken(request) {
        const user = request['user'];
        const newToken = await this.jwtService.signAsync({
            sub: user.sub,
            username: user.username,
        }, { secret: this.configService.get('SECRET'), });
        return { access_token: newToken };
    }
};
exports.GetNewTokenController = GetNewTokenController;
__decorate([
    (0, common_1.UseGuards)(auth_service_1.AuthService),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetNewTokenController.prototype, "getNewToken", null);
exports.GetNewTokenController = GetNewTokenController = __decorate([
    (0, common_1.Controller)('getNewToken'),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], GetNewTokenController);
//# sourceMappingURL=get-new-token.controller.js.map