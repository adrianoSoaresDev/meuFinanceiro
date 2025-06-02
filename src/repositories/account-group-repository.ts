"use server";
import { AccountGroup, AccountGroupBase } from "@/types/account-group";
import prisma from "../../lib/prisma";

export class AccountGroupRepository {
  async getAll(): Promise<AccountGroup[]> {
    return prisma.accountGroup.findMany();
  }

  async get(id: number): Promise<AccountGroup | null> {
    return prisma.accountGroup.findUnique({ where: { id: id } });
  }

  async post(payload: AccountGroupBase): Promise<AccountGroup> {
    console.log(payload);
    return prisma.accountGroup.create({ data: payload }).catch((e) => {
      console.log(e);
      return Promise.reject(e);
    });
  }
  async put(id: number, payload: AccountGroupBase): Promise<AccountGroup> {
    return prisma.accountGroup.update({ where: { id }, data: payload });
  }
}
