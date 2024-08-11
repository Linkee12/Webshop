import { PrismaService } from 'src/prisma/prisma.service';
import { getProductsBodyDto } from './getproductsBodyDto';
export declare class GetproductsService {
    private prisma;
    constructor(prisma: PrismaService);
    getProducts(getProductsBody: getProductsBodyDto): Promise<(number | {
        id: number;
        name: string;
        catid: number;
        price: import("@prisma/client/runtime/library").Decimal;
        avaliable: boolean;
    }[])[]>;
}
