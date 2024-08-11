import { Injectable } from '@nestjs/common';
import { category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetCategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategory(): Promise<category[] | null[]> {
    const category = await this.prisma.category.findMany({});
    return category;
  }
}
