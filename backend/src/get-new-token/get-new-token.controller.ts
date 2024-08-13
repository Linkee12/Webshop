import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';

@Controller('getNewToken')
export class GetNewTokenController {

  constructor(private jwtService: JwtService) { }

  @UseGuards(AuthService)
  @Post()
  async getNewToken(@Req() request: Request) {

    const user = request['user'] as { username: string; sub: number }
    const newToken = await this.jwtService.signAsync({
      username: user.username,
      sub: user.sub,
    });

    return { access_token: newToken };
  }
}
