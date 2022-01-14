import { Test, TestingModule } from '@nestjs/testing';
import { PlotoflandsService } from './plotoflands.service';

describe('PlotoflandsService', () => {
  let service: PlotoflandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlotoflandsService],
    }).compile();

    service = module.get<PlotoflandsService>(PlotoflandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
