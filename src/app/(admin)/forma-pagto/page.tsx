
import { SearchPaymentTypeView } from "@/views/forma-pagto/consultar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forma de pagto | Meu Financeiro",
  description:
    "",
};

export default function Page() {
  return (
    <SearchPaymentTypeView />
  );
}
