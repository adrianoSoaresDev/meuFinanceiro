
import { SearchView } from "@/views/grupo-de-contas/consultar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forma de pagto | Meu Financeiro",
  description:
    "",
};

export default function Page() {
  return (
    <SearchView />
  );
}
