import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { ResidentsModule } from './residents/residents.module';
import { JobtitleModule } from './jobtitle/jobtitle.module';
import { PlotoflandsModule } from './plotoflands/plotoflands.module';
import { ResidentPlotoflandModule } from './resident-plotofland/resident-plotofland.module';
import { EmployeeJobtitleModule } from './employee-jobtitle/employee-jobtitle.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [EmployeesModule, ResidentsModule, JobtitleModule, PlotoflandsModule, ResidentPlotoflandModule, EmployeeJobtitleModule, UsersModule, AuthModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
