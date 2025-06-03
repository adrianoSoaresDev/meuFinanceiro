"use client";
import React, { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import { useRouter } from "next/navigation";
import { AccountGroup } from "@/types/account-group";
import { AccountSubGroupBase } from "@/types/account-sub-group";
import { AccountSubGroupForm } from "@/components/meu-financeiro/account-sub-group/form";
import { accountSubGroupProvider } from "@/providers/account-sub-group-provider";
import Alert from "@/components/ui/alert/Alert";


interface Props {
  accountsGroup: AccountGroup[];
}

export function CadastrarView({ accountsGroup }: Props) {
  const { back, push } = useRouter();
  const [hasError, setError] = useState<boolean | string>(false);
  const { post } = accountSubGroupProvider();
  const handleSave = async (data: AccountSubGroupBase): Promise<void> => {
    try {
      await post(data);
      push("/sub-grupo-de-contas");
    } catch (error) {
      setError(error["message"]);
      throw error;
    }

  };
  const onBack = () => back();
  const options = accountsGroup.map(item => ({ label: item.name, value: String(item.id) }));

  return (
    <ComponentCard title="Grupo de Contas">
      {hasError && <Alert
        variant="error"
        title="Erro ao cadastrar"
        message={String(hasError)}
      />}
      <AccountSubGroupForm
        onBack={onBack}
        onSave={handleSave}
        accountGroupOptions={options} />
    </ComponentCard>
  );
}