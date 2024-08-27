import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';

@Controller('getNewToken')
export class GetNewTokenController {

  constructor(private jwtService: JwtService,
    private configService: ConfigService
  ) { }

  @UseGuards(AuthService)
  @Post()
  async getNewToken(@Req() request: CustomRequest) {

    const user = request['user']
    const newToken = await this.jwtService.signAsync({
      sub: user.sub,
      username: user.username,
    }, { secret: this.configService.get<string>('SECRET'), });
    return { access_token: newToken };
  }
}

interface CustomRequest extends Request {
  user: {
    sub: number,
    username: string
  };
}