import { Module } from '@nestjs/common';
import { ResidentResidents_PlotofLandService } from './resident-plotofland.service';
import { ResidentPlotoflandController } from './resident-plotofland.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ResidentPlotoflandController],
  providers: [ResidentResidents_PlotofLandService, PrismaClient]
})

export class ResidentPlotoflandModule { }
