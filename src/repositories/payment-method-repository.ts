"use server";
import { PaymentMethod, PaymentMethodBase } from "@/types/payment-method";
import prisma from "../../lib/prisma";

export class PaymentMethodRepository {
  async getAll(): Promise<PaymentMethod[]> {
    return prisma.paymentType.findMany();
  }

  async get(id: number): Promise<PaymentMethod | null> {
    return prisma.paymentType.findUnique({ where: { id: id } });
  }

  async post(payload: PaymentMethodBase): Promise<PaymentMethod> {
    return prisma.paymentType.create({ data: payload }).catch((e) => {
      return Promise.reject(e);
    });
  }
  async put(id: number, payload: PaymentMethodBase): Promise<PaymentMethod> {
    return prisma.paymentType.update({ where: { id }, data: payload });
  }

  async remove(id: number): Promise<PaymentMethod> {
    return prisma.paymentType.delete({ where: { id } }).catch((e) => {
      console.log(e);
      throw e;
    });
  }
}
