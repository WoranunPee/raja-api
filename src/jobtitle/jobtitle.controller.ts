import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobtitleService } from './jobtitle.service';

@Controller('jobtitle')
export class JobtitleController {
  constructor(private readonly jobtitleService: JobtitleService) { }

  @Post()
  create(@Body() createJobtitleDto: any) {
    return this.jobtitleService.create(createJobtitleDto);
  }

  @Get()
  findAll() {
    return this.jobtitleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobtitleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobtitleDto: any) {
    return this.jobtitleService.update(+id, updateJobtitleDto);
  }
}


