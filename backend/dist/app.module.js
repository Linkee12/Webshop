"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const login_module_1 = require("./login/login.module");
const config_1 = require("@nestjs/config");
const login_controller_1 = require("./login/login.controller");
const reg_controller_1 = require("./reg/reg.controller");
const users_service_1 = require("./users/users.service");
const get_new_token_controller_1 = require("./get-new-token/get-new-token.controller");
const auth_service_1 = require("./auth/auth.service");
const basket_controller_1 = require("./basket/basket.controller");
const getcategory_controller_1 = require("./getcategory/getcategory.controller");
const getcategory_service_1 = require("./getcategory/getcategory.service");
const basket_service_1 = require("./basket/basket.service");
const jwt_1 = require("@nestjs/jwt");
const getproducts_controller_1 = require("./getproducts/getproducts.controller");
const getproducts_service_1 = require("./getproducts/getproducts.service");
const get_new_token_module_1 = require("./get-new-token/get-new-token.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            login_module_1.LoginModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            get_new_token_module_1.GetNewTokenModule,
            auth_module_1.AuthModule,
        ],
        controllers: [
            app_controller_1.AppController,
            login_controller_1.LoginController,
            reg_controller_1.RegController,
            get_new_token_controller_1.GetNewTokenController,
            basket_controller_1.BasketController,
            getcategory_controller_1.GetCategoryController,
            getproducts_controller_1.GetproductsController,
        ],
        providers: [
            prisma_service_1.PrismaService,
            jwt_1.JwtService,
            app_service_1.AppService,
            prisma_service_1.PrismaService,
            users_service_1.UsersService,
            auth_service_1.AuthService,
            basket_service_1.BasketService,
            getcategory_service_1.GetCategoryService,
            getproducts_service_1.GetproductsService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map