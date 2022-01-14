import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeJobtitleService } from './employee-jobtitle.service';

describe('EmployeeJobtitleService', () => {
  let service: EmployeeJobtitleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeJobtitleService],
    }).compile();

    service = module.get<EmployeeJobtitleService>(EmployeeJobtitleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
