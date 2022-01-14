import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeJobtitleController } from './employee-jobtitle.controller';
import { EmployeeJobtitleService } from './employee-jobtitle.service';

describe('EmployeeJobtitleController', () => {
  let controller: EmployeeJobtitleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeJobtitleController],
      providers: [EmployeeJobtitleService],
    }).compile();

    controller = module.get<EmployeeJobtitleController>(EmployeeJobtitleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
