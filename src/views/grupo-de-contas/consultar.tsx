"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Table, { Records } from "@/components/tables/Table";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";
import { accountProvider } from "@/providers/account-group-provider";
import { AccountGroup } from "@/app/types/account-group";

const optionsData = (payload: AccountGroup[]) => {
  const data: Records[] = payload.map(item => {
    return [
      { value: item.name },
      { value: item.status ? "Ativo" : "Inativo", color: item.status ? "success" : "error" },
    ];
  });

  return data;
};

export async function SearchView() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();
  const { getAll } = accountProvider();
  const data = optionsData(await getAll());
  return (
    <div>
      <PageBreadcrumb pageTitle="Grupo de Contas" />
      <div className="space-y-6">
        <ComponentCard title="">
          <Button onClick={() => push("/grupo-de-contas/cadastrar")}>Novo</Button>
          <Table title="Registros" columns={[
            "Nome",
            "Status"
          ]}
            records={data}
          />
        </ComponentCard>
      </div>
    </div>
  );
}