import { IsEmail, IsNotEmpty } from 'class-validator';

export class loginBodyDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
