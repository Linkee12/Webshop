import { Test, TestingModule } from '@nestjs/testing';
import { GetCategoryService } from './getcategory.service';

describe('GetCategoryService', () => {
  let service: GetCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCategoryService],
    }).compile();

    service = module.get<GetCategoryService>(GetCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
