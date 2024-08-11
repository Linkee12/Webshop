import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    if (user?.password != null && user.id != null && user.username != null) {
      if (await bcrypt.compare(pass, user.password)) {
        {
          const payload = { sub: user.id, username: user.username };
          return {
            access_token: await this.jwtService.signAsync(payload),
          };
        }
      } else {
        throw new UnauthorizedException();
      }
    }
  }
}
