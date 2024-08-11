import { Test, TestingModule } from '@nestjs/testing';
import { GetproductsController } from './getproducts.controller';

describe('GetproductsController', () => {
  let controller: GetproductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetproductsController],
    }).compile();

    controller = module.get<GetproductsController>(GetproductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
