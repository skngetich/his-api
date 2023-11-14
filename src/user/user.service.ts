import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async userCreate(data) {
    const { user, contact, disability } = data;

    // Create a new user and retrieve the user ID
    const createdUser = await this.prisma.user.create({
      data: user,
    });

    // Assign the user ID to the contact and disability data
    contact.userId = createdUser.userId;
    disability.userId = createdUser.userId;

    // Create contact and disability records
    const createdContact = await this.prisma.contact.create({
      data: contact,
    });

    const createdDisability = await this.prisma.disability.create({
      data: disability,
    });

    return {
      user: createdUser,
      contact: createdContact,
      disability: createdDisability,
    };
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
