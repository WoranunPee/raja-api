import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeJobtitleService } from './employee-jobtitle.service';
import { CreateEmployeeJobtitleDto } from './dto/create-employee-jobtitle.dto';
import { UpdateEmployeeJobtitleDto } from './dto/update-employee-jobtitle.dto';

@Controller('employee-jobtitle')
export class EmployeeJobtitleController {
  constructor(private readonly employeeJobtitleService: EmployeeJobtitleService) {}

  @Post()
  create(@Body() createEmployeeJobtitleDto: CreateEmployeeJobtitleDto) {
    return this.employeeJobtitleService.create(createEmployeeJobtitleDto);
  }

  @Get()
  findAll() {
    return this.employeeJobtitleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeJobtitleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeJobtitleDto: UpdateEmployeeJobtitleDto) {
    return this.employeeJobtitleService.update(+id, updateEmployeeJobtitleDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.employeeJobtitleService.remove(+id);
  // }
}
