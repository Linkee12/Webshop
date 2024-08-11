import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { loginBodyDto } from './loginBodyDto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {
    console.log('asasd');
  }
  @Post()
  @HttpCode(200)
  async create(@Body() userBody: loginBodyDto): Promise<string> {
    const token = await this.loginService.signIn(
      userBody.email,
      userBody.password,
    );
    return token;
  }
}
