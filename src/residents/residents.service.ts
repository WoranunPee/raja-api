import { Injectable } from '@nestjs/common';
import { PlotofLand, Prisma, PrismaClient, Residents } from '@prisma/client';

@Injectable()
export class ResidentsService {
    constructor(private prisma: PrismaClient) { }

    create(ResidentsCreateInput: Prisma.ResidentsCreateInput): Promise<Residents> {
        return this.prisma.residents.create({ data: ResidentsCreateInput })
    }

    findAll() {
        return this.prisma.residents.findMany()
    }

    findOne(id: number): Promise<Residents> {
        return this.prisma.residents.findUnique({ where: { id: id } })
    }

    update(id: number, ResidentsUpdateInput: Prisma.ResidentsUpdateInput): Promise<Residents> {
        return this.prisma.residents.update({ where: { id: id }, data: ResidentsUpdateInput })
    }
}
