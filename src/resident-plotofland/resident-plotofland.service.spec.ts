import { Test, TestingModule } from '@nestjs/testing';
import { ResidentPlotoflandService } from './resident-plotofland.service';

describe('ResidentPlotoflandService', () => {
  let service: ResidentPlotoflandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResidentPlotoflandService],
    }).compile();

    service = module.get<ResidentPlotoflandService>(ResidentPlotoflandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
