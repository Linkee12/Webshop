import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
import { LoginController } from './login/login.controller';
import { RegController } from './reg/reg.controller';
import { UsersService } from './users/users.service';
import { GetNewTokenController } from './get-new-token/get-new-token.controller';
import { AuthService } from './auth/auth.service';
import { BasketController } from './basket/basket.controller';
import { GetCategoryController } from './getcategory/getcategory.controller';
import { GetCategoryService } from './getcategory/getcategory.service';
import { BasketService } from './basket/basket.service';
import { JwtService } from '@nestjs/jwt';
import { GetproductsController } from './getproducts/getproducts.controller';
import { GetproductsService } from './getproducts/getproducts.service';

@Module({
  imports: [
    LoginModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [
    AppController,
    LoginController,
    RegController,
    GetNewTokenController,
    BasketController,
    GetCategoryController,
    GetproductsController,
  ],
  providers: [
    PrismaService,
    JwtService,
    AppService,
    PrismaService,
    UsersService,
    AuthService,
    BasketService,
    GetCategoryService,
    GetproductsService,
  ],
})
export class AppModule { }
