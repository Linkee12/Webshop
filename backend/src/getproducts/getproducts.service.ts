import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { getProductsBodyDto } from './getproductsBodyDto';

@Injectable()
export class GetproductsService {
  constructor(private prisma: PrismaService) { }
  async getProducts(getProductsBody: getProductsBodyDto) {
    const products = await this.prisma.products.findMany({
      where: {
        id: getProductsBody.id,
      },
    });
    return products;
  }
}
