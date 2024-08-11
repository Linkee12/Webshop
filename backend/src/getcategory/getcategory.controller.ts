import { Controller, Get } from '@nestjs/common';
import { GetCategoryService } from './getcategory.service';

@Controller('getcategory')
export class GetCategoryController {
  constructor(private getCategoryService: GetCategoryService) { }
  @Get()
  async findAll() {
    return await this.getCategoryService.getCategory();
  }
}
