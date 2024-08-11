import { products } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BasketService {
    private prisma;
    constructor(prisma: PrismaService);
    [x: string]: any;
    getBasketContent(ids: number[]): Promise<products[]>;
}
