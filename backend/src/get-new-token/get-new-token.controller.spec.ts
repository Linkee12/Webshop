import { Test, TestingModule } from '@nestjs/testing';
import { GetNewTokenController } from './get-new-token.controller';

describe('GetNewTokenController', () => {
  let controller: GetNewTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetNewTokenController],
    }).compile();

    controller = module.get<GetNewTokenController>(GetNewTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
