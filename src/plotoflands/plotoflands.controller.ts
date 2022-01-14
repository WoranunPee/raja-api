import { Controller } from '@nestjs/common';
import { PlotoflandsService } from './plotoflands.service';

@Controller('plotoflands')
export class PlotoflandsController {
  constructor(private readonly plotoflandsService: PlotoflandsService) {}
}
