import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RegBodyDto } from './regBodyDto';
import { UsersService } from 'src/users/users.service';

@Controller('reg')
export class RegController {
  constructor(private usersService: UsersService) { }
  @Post()
  @HttpCode(200)
  async create(@Body() regBody: RegBodyDto): Promise<{ message: string }> {
    if (!(await this.usersService.getUserByEmail(regBody.email))) {
      await this.usersService.addUser(
        regBody.username,
        regBody.email,
        regBody.password,
      );
      return { message: 'Registration is successful' };
    } else {
      return { message: 'The user already exist' };
    }
  }
}
