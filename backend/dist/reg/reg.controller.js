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
exports.RegController = void 0;
const common_1 = require("@nestjs/common");
const regBodyDto_1 = require("./regBodyDto");
const users_service_1 = require("../users/users.service");
let RegController = class RegController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(regBody) {
        if (!(await this.usersService.getUserByEmail(regBody.email))) {
            await this.usersService.addUser(regBody.username, regBody.email, regBody.password);
            return { message: 'Registration is successful' };
        }
        else {
            return { message: 'The user already exist' };
        }
    }
};
exports.RegController = RegController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [regBodyDto_1.RegBodyDto]),
    __metadata("design:returntype", Promise)
], RegController.prototype, "create", null);
exports.RegController = RegController = __decorate([
    (0, common_1.Controller)('reg'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], RegController);
//# sourceMappingURL=reg.controller.js.map