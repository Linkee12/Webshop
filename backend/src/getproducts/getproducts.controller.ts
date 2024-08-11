import { Body, Controller, Post } from '@nestjs/common';
import { GetproductsService } from './getproducts.service';
import { getProductsBodyDto } from './getproductsBodyDto';

@Controller('getproducts')
export class GetproductsController {
  constructor(private getProductsService: GetproductsService) { }
  @Post()
  async create(@Body() productsBody: getProductsBodyDto) {
    const products = this.getProductsService.getProducts(productsBody);

    return products;
  }
}
