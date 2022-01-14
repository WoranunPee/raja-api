import { Module } from '@nestjs/common';
import { PlotoflandsService } from './plotoflands.service';
import { PlotoflandsController } from './plotoflands.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [PlotoflandsController],
  providers: [PlotoflandsService,PrismaClient]
})
export class PlotoflandsModule {}
