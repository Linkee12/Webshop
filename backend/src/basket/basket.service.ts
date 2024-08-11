import { Injectable } from '@nestjs/common';
import { products } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BasketService {
  constructor(private prisma: PrismaService) { }
  [x: string]: any;
  async getBasketContent(ids: number[]): Promise<products[]> {
    const basketContent = await this.prisma.products.findMany({
      where: {
        id: { in: ids },
      },
    });
    return basketContent;
  }
}
