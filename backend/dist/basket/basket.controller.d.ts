import { BasketService } from './basket.service';
export declare class BasketController {
    private basketService;
    constructor(basketService: BasketService);
    create(basketBody: number[]): Promise<{
        id: number;
        name: string;
        catid: number;
        price: import("@prisma/client/runtime/library").Decimal;
        avaliable: boolean;
    }[]>;
}
