import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { getProductsBodyDto } from './getproductsBodyDto';

@Injectable()
export class GetproductsService {
  constructor(private prisma: PrismaService) { }
  async getProducts(getProductsBody: getProductsBodyDto) {
    const products = await this.prisma.products.findMany({
      where: {
        catid: getProductsBody.id,

      },
      skip: getProductsBody.pageNumber * 10,
      take: (getProductsBody.pageNumber + 1) * 10
    });

    const poductsNumber = await this.prisma.products.count({
      where: {
        catid: getProductsBody.id
      }
    });

    return [poductsNumber, products];
  }
}
