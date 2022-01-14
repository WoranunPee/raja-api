import { Injectable } from '@nestjs/common';
import { PlotofLand, Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PlotoflandsService {
    constructor(private prisma: PrismaClient) { }

    create(PlotofLandCreateInput: Prisma.PlotofLandCreateInput): Promise<PlotofLand> {
        return this.prisma.plotofLand.create({ data: PlotofLandCreateInput })
    }

    findAll() {
        return this.prisma.plotofLand.findMany()
    }

    findOne(id: number): Promise<PlotofLand> {
        return this.prisma.plotofLand.findUnique({ where: { id: id } })
    }

    update(id: number, PlotofLandUpdateInput: Prisma.PlotofLandUpdateInput): Promise<PlotofLand> {
        return this.prisma.plotofLand.update({ where: { id: id }, data: PlotofLandUpdateInput })
    }
}
