import { accountProvider } from "@/providers/account-group-provider";
import { CadastrarView } from "@/views/sub-grupo-de-contas/cadastrar";

export default async function Page() {
  const { getAll } = accountProvider();
  const accountsGroup = await getAll();
  return (
    <CadastrarView accountsGroup={accountsGroup} />
  );
}