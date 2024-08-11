import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUserByEmail(email: string): Promise<users | null>;
    addUser(username: string, email: string, pass: string): Promise<void>;
}
