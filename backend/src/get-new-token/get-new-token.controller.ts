import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { refreshBodyDto } from './refreshBodyDto';

@Controller('getNewToken')
export class GetNewTokenController {
  constructor(private jwtService: JwtService) {}

  @UseGuards(AuthService)
  @Post()
  async getNewToken(@Body() refreshBody: refreshBodyDto) {
    const newToken = await this.jwtService.signAsync({
      username: refreshBody.username,
      sub: refreshBody.id,
    });

    return { access_token: newToken };
  }
}
