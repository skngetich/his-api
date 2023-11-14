import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async userCreate(data) {
    return this.prisma.user.create({
      data,
      include: {
        contact: true,
        disability: true,
      },
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
