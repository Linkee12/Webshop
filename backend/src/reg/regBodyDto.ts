import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegBodyDto {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
