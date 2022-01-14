import { Injectable } from '@nestjs/common';
import { JobTitle, Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class JobtitleService {
    constructor(private prisma: PrismaClient) { }

    create(JobTitleCreateInput: Prisma.JobTitleCreateInput): Promise<JobTitle> {
        return this.prisma.jobTitle.create({ data: JobTitleCreateInput })
    }

    findAll() {
        return this.prisma.jobTitle.findMany()
    }

    findOne(id: number): Promise<JobTitle> {
        return this.prisma.jobTitle.findUnique({ where: { id: id } })
    }

    update(id: number, JobTitleUpdateInput: Prisma.JobTitleUpdateInput): Promise<JobTitle> {
        return this.prisma.jobTitle.update({ where: { id: id }, data: JobTitleUpdateInput })
    }

}
