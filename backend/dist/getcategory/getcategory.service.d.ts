import { category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class GetCategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getCategory(): Promise<category[] | null[]>;
}
