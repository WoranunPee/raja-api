import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeJobtitleDto } from './create-employee-jobtitle.dto';

export class UpdateEmployeeJobtitleDto extends PartialType(CreateEmployeeJobtitleDto) {}
