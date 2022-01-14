import { Module } from '@nestjs/common';
import { EmployeeJobtitleService } from './employee-jobtitle.service';
import { EmployeeJobtitleController } from './employee-jobtitle.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [EmployeeJobtitleController],
  providers: [EmployeeJobtitleService,PrismaClient]
})
export class EmployeeJobtitleModule {}
