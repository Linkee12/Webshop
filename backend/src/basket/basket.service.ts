import { Injectable } from '@nestjs/common';

@Injectable()
export class BasketService {
  [x: string]: any;
  async getBasketContent(ids: number[]): Promise<number[]> {
    const basketContent = await this.prisma.products.findMany({
      where: {
        id: ids,
      },
    });
    return basketContent;
  }
}
