import { Controller } from '@nestjs/common';
import { ResidentResidents_PlotofLandService } from './resident-plotofland.service';

@Controller('resident-plotofland')
export class ResidentPlotoflandController {
  constructor(private readonly residentPlotoflandService: ResidentResidents_PlotofLandService) { }
}
