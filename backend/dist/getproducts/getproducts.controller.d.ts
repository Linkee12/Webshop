import { GetproductsService } from './getproducts.service';
import { getProductsBodyDto } from './getproductsBodyDto';
export declare class GetproductsController {
    private getProductsService;
    constructor(getProductsService: GetproductsService);
    create(productsBody: getProductsBodyDto): Promise<{
        id: number;
        name: string;
        catid: number;
        price: import("@prisma/client/runtime/library").Decimal;
        avaliable: boolean;
    }[]>;
}
