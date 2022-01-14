import { Module } from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { ResidentsController } from './residents.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ResidentsController],
  providers: [ResidentsService,PrismaClient]
})
export class ResidentsModule {}
