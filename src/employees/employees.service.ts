import { Injectable } from '@nestjs/common';
import { Employee, Prisma, PrismaClient } from '@prisma/client';
import { EmployeeJobtitleService } from 'src/employee-jobtitle/employee-jobtitle.service';

@Injectable()
export class EmployeesService {


    constructor(private prisma: PrismaClient,
        private employeeJobtitleService: EmployeeJobtitleService) { }

    create(EmployeeCreateInput:  Prisma.EmployeeCreateInput): Promise<Employee> {
        return this.prisma.employee.create({ data: EmployeeCreateInput })
    }

    async findAll() {
        const employees = await this.prisma.employee.findMany()
        const empId = employees.map((item: any) => item.id)
        const JobtitleById = await this.employeeJobtitleService.findAll(empId)
        console.log(`empId`, empId)
        console.log(`JobtitleById`, JobtitleById)
        const empJobTitle = employees.map((emp) => {
            let jobTitle = JobtitleById.filter(job => job.employeeId === emp.id)
            console.log(`jobTitle`, jobTitle)
            return { ...emp, jobTitle: jobTitle }
        })

        return empJobTitle


    }

    findOne(id: number): Promise<Employee> {
        return this.prisma.employee.findUnique({ where: { id: id } })
    }

    update(id: number, EmployeeUpdateInput: Prisma.EmployeeUpdateInput): Promise<Employee> {
        return this.prisma.employee.update({ where: { id: id }, data: EmployeeUpdateInput })
    }
}
