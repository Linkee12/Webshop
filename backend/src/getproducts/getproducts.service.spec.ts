import { Test, TestingModule } from '@nestjs/testing';
import { GetproductsService } from './getproducts.service';

describe('GetproductsService', () => {
  let service: GetproductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetproductsService],
    }).compile();

    service = module.get<GetproductsService>(GetproductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
