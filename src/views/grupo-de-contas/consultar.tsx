"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Table, { Records } from "@/components/tables/Table";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";
import { AccountGroup } from "@/types/account-group";

interface Props {
  data: AccountGroup[];
}
const optionsData = (payload: AccountGroup[]) => {
  const data: Records[] = payload.map(item => {
    return [
      { value: item.name },
      { value: item.status ? "Ativo" : "Inativo", color: item.status ? "success" : "error" },
    ];
  });

  return data;
};

export async function SearchView({ data }: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();

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
            records={optionsData(data)}
          />
        </ComponentCard>
      </div>
    </div>
  );
}