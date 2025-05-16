
import { accountProvider } from "@/providers/account-group-provider";
import { accountSubGroupProvider } from "@/providers/account-sub-group-provider";
import { SearchView } from "@/views/sub-grupo-de-contas/consultar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forma de pagto | Meu Financeiro",
  description:
    "",
};

export default async function Page() {
  const { getAll } = accountSubGroupProvider();
  const data = await getAll();
  return (
    <SearchView data={data} />
  );
}
