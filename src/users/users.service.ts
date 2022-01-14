import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { BcryptHash } from 'utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {

  }
  async create(UserCreateInput: Prisma.UserCreateInput): Promise<User> {
    UserCreateInput.password = await BcryptHash(UserCreateInput.password)
    return this.prisma.user.create({ data: UserCreateInput })
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(UserWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({ where: UserWhereUniqueInput })
  }

  update(id: number, UserUpdateInput: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { id: id }, data: UserUpdateInput })
  }

}