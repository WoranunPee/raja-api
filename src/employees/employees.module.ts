import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PrismaClient } from '@prisma/client';
import { EmployeeJobtitleService } from 'src/employee-jobtitle/employee-jobtitle.service';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService,PrismaClient,EmployeeJobtitleService]
})
export class EmployeesModule {}
