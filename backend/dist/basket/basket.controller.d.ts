import { BasketService } from './basket.service';
export declare class BasketController {
    private basketService;
    constructor(basketService: BasketService);
    create(basketBody: number[]): Promise<number[]>;
}
