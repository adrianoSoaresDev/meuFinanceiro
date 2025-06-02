export type MethodPayment = "CC" | "DB" | "DP" | "VA" | "IV" | "SQ" | "DI";

export interface PaymentMethodBase {
  name: string;
  type: MethodPayment | string;
  icon: string;
  status: boolean;
}

export type PaymentMethod = PaymentMethodBase & { id: number };
