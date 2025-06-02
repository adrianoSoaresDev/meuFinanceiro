import { accountGroupProvider } from "@/providers/account-group-provider";
import { CadastrarView } from "@/views/sub-grupo-de-contas/cadastrar";

export default async function Page() {
  const { getAll } = accountGroupProvider();
  const accountsGroup = await getAll();
  return (
    <CadastrarView accountsGroup={accountsGroup} />
  );
}