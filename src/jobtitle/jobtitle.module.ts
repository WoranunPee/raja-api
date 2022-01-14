import { Module } from '@nestjs/common';
import { JobtitleService } from './jobtitle.service';
import { JobtitleController } from './jobtitle.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [JobtitleController],
  providers: [JobtitleService,PrismaClient]
})
export class JobtitleModule {}
