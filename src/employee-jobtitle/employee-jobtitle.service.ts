import { Injectable } from '@nestjs/common';
import { Employee_JobTitle, Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class EmployeeJobtitleService {
  constructor(private prisma: PrismaClient) { }

  create(Employee_JobTitleCreateInput: Prisma.Employee_JobTitleCreateInput): Promise<Employee_JobTitle> {
    return this.prisma.employee_JobTitle.create({ data: Employee_JobTitleCreateInput })
  }

  async findAll(req?: any) {
    const resultWithWhere = await this.prisma.employee_JobTitle.findMany({
      where: {
        employeeId: { in: req },
      },
      include: {
        jobTitle: {
          select: {
            title: true,
          },
        }
      }
    })
    const result = await this.prisma.employee_JobTitle.findMany({
      include: {
        jobTitle: {
          select: {
            title: true,
          },
        }
      }
    })


    return req ? resultWithWhere : result
  }

  findOne(id: number): Promise<Employee_JobTitle> {
    return this.prisma.employee_JobTitle.findUnique({ where: { id: id } })
  }

  update(id: number, Employee_JobTitleUpdateInput: Prisma.Employee_JobTitleUpdateInput): Promise<Employee_JobTitle> {
    return this.prisma.employee_JobTitle.update({ where: { id: id }, data: Employee_JobTitleUpdateInput })
  }

}
