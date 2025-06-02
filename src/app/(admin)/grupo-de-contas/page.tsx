
import { accountGroupProvider } from "@/providers/account-group-provider";
import { SearchView } from "@/views/grupo-de-contas/consultar";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Forma de pagto | Meu Financeiro",
  description:
    "",
};

export default async function Page() {
  try {
    const { getAll } = accountGroupProvider();
    const data = await getAll();
    return (
      <SearchView data={data} />
    );
  } catch (error) {
    redirect("/500");
  }
}
