
import { PaymentType } from "@/generated/prisma";
import { paymentTypeProvider } from "@/providers/payment-method-provider";
import { SearchPaymentTypeView } from "@/views/forma-pagto/consultar";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Forma de pagto | Meu Financeiro",
  description:
    "",
};

export default async function Page() {
  const { getAll } = paymentTypeProvider();
  let data: PaymentType[] = [];
  try {
    const paymentsType = await getAll();
    data.push(...paymentsType);
  } catch (error) {
    redirect("/500");

  }
  return (
    <SearchPaymentTypeView data={data} />
  );
}
