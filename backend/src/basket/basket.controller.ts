import { Body, Controller, Post } from '@nestjs/common';
import { BasketService } from './basket.service';

@Controller('basket')
export class BasketController {
  constructor(private basketService: BasketService) { }
  @Post()
  async create(@Body() basketBody: number[]) {
    if (basketBody.length == 0) {
      return [];
    }
    const basket = await this.basketService.getBasketContent(basketBody);
    return basket;
  }
}
