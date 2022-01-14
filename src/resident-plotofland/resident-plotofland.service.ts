import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Residents_PlotofLand } from '@prisma/client';

@Injectable()
export class ResidentResidents_PlotofLandService {

    constructor(private prisma: PrismaClient) { }

    create(Residents_PlotofLandCreateInput: Prisma.Residents_PlotofLandCreateInput): Promise<Residents_PlotofLand> {
        return this.prisma.residents_PlotofLand.create({ data: Residents_PlotofLandCreateInput })
    }

    findAll() {
        return this.prisma.residents_PlotofLand.findMany()
    }

    findOne(id: number): Promise<Residents_PlotofLand> {
        return this.prisma.residents_PlotofLand.findUnique({ where: { id: id } })
    }

    update(id: number, Residents_PlotofLandUpdateInput: Prisma.Residents_PlotofLandUpdateInput): Promise<Residents_PlotofLand> {
        return this.prisma.residents_PlotofLand.update({ where: { id: id }, data: Residents_PlotofLandUpdateInput })
    }
}
