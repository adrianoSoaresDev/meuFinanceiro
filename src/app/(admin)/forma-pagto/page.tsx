
import { PaymentType } from "@/generated/prisma";
import { paymentMethodProvider } from "@/providers/payment-method-provider";
import { SearchPaymentTypeView } from "@/views/forma-pagto/consultar";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Forma de pagto | Meu Financeiro",
  description:
    "",
};

export default async function Page() {
  const { getAll } = paymentMethodProvider();
  let data: PaymentType[] = [];
  try {
    const paymentsMethods = await getAll();
    data.push(...paymentsMethods);
  } catch (error) {
    redirect("/500");

  }
  return (
    <SearchPaymentTypeView data={data} />
  );
}
