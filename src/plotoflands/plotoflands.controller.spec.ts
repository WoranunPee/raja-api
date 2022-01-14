import { Test, TestingModule } from '@nestjs/testing';
import { PlotoflandsController } from './plotoflands.controller';
import { PlotoflandsService } from './plotoflands.service';

describe('PlotoflandsController', () => {
  let controller: PlotoflandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlotoflandsController],
      providers: [PlotoflandsService],
    }).compile();

    controller = module.get<PlotoflandsController>(PlotoflandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
