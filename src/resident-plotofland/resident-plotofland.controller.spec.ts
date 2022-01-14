import { Test, TestingModule } from '@nestjs/testing';
import { ResidentPlotoflandController } from './resident-plotofland.controller';
import { ResidentPlotoflandService } from './resident-plotofland.service';

describe('ResidentPlotoflandController', () => {
  let controller: ResidentPlotoflandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResidentPlotoflandController],
      providers: [ResidentPlotoflandService],
    }).compile();

    controller = module.get<ResidentPlotoflandController>(ResidentPlotoflandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
