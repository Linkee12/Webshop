import { Module } from '@nestjs/common';
import { GetNewTokenController } from './get-new-token.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [AuthModule, ConfigModule],
    providers: [GetNewTokenController, AuthService, JwtService],
    exports: [GetNewTokenController],
})
export class GetNewTokenModule { }
