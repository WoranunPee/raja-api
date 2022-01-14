import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as _ from 'lodash'
import { EmployeesService } from 'src/employees/employees.service';
import { PlotoflandsService } from 'src/plotoflands/plotoflands.service';
import { ResidentsService } from 'src/residents/residents.service';

@Injectable()
export class DashboardService {
    constructor(private prisma: PrismaClient, private readonly employeeService: EmployeesService,
        private readonly plotoflandService: PlotoflandsService, private readonly residentService: ResidentsService
    ) { }

    async cardTotalReport() {
        const employees = await this.employeeService.findAll()
        const plotofLands = await this.plotoflandService.findAll()
        const residents = await this.residentService.findAll()
        const isFinish = await Promise.all([_.size(employees), _.size(plotofLands), _.size(residents)])
        const result = [
            {
                name_en: 'employee',
                name_th: 'พนักงาน',
                total: _.size(employees),
                bgColor:'linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%);'
            },
            {
                name_en : 'plotandLands',
                name_th: 'ที่ดิน/แปลง',
                total: _.size(plotofLands),
                bgColor:'linear-gradient(135deg, #b1ea4d 0%,#459522 100%);'
            },
            {
                name_en:'resident',
                name_th: 'ผู้พักอาศัย',
                total: _.size(residents),
                bgColor:'linear-gradient(135deg, #fad961 0%,#f76b1c 100%);'
            }
        ]
        if (isFinish) {
            return result
        }
    }


}
