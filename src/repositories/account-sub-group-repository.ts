"use server";
import {
  AccountSubGroup,
  AccountSubGroupBase,
} from "@/types/account-sub-group";
import prisma from "../../lib/prisma";

export class AccountSubGroupRepository {
  async getAll(): Promise<AccountSubGroup[]> {
    return prisma.accountSubGroup.findMany();
  }

  async get(id: number): Promise<AccountSubGroup | null> {
    return prisma.accountSubGroup.findUnique({ where: { id: id } });
  }

  async post(payload: AccountSubGroupBase): Promise<AccountSubGroup> {
    console.log(payload);
    return prisma.accountSubGroup.create({ data: payload }).catch((e) => {
      console.log(e);
      return Promise.reject(e);
    });
  }
  async put(
    id: number,
    payload: AccountSubGroupBase
  ): Promise<AccountSubGroup> {
    return prisma.accountSubGroup.update({ where: { id }, data: payload });
  }
}
