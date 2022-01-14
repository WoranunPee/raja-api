import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { EmployeeJobtitleService } from 'src/employee-jobtitle/employee-jobtitle.service';
import { EmployeesService } from 'src/employees/employees.service';
import { PlotoflandsService } from 'src/plotoflands/plotoflands.service';
import { ResidentsService } from 'src/residents/residents.service';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  controllers: [DashboardController],
  providers: [PrismaClient, DashboardService,EmployeesService,PlotoflandsService,ResidentsService,EmployeeJobtitleService]
})
export class DashboardModule { }
