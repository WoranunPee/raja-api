import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

  @Post()
  create(@Body() createEmployeeJobtitleDto: any) {
    return this.employeesService.create(createEmployeeJobtitleDto);
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeJobtitleDto: any) {
    return this.employeesService.update(+id, updateEmployeeJobtitleDto);
  }
}
