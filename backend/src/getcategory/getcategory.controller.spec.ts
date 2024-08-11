import { Test, TestingModule } from '@nestjs/testing';
import { GetCategoryController } from './getcategory.controller';

describe('GetCategoryController', () => {
  let controller: GetCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetCategoryController],
    }).compile();

    controller = module.get<GetCategoryController>(GetCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
