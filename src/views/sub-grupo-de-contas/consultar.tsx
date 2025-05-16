"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Table, { Records } from "@/components/tables/Table";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";
import { AccountSubGroup } from "@/app/types/sub-account-group";

interface Props {
  data: AccountSubGroup[];
}
export function SearchView({ data }: Props) {
  const { push } = useRouter();
  const customData: Records[] = data.map(item => ([{ value: item.name }, { value: item.status ? "Ativo" : "Inativo", color: item.status ? "success" : "error" }]));
  return (
    <div>
      <PageBreadcrumb pageTitle="Grupo de Contas" />
      <div className="space-y-6">
        <ComponentCard title="">
          <Button onClick={() => push("/sub-grupo-de-contas/cadastrar")}>Novo</Button>
          <Table title="Registros" columns={[
            "Nome",
            "Status"
          ]}
            records={customData}
          />
        </ComponentCard>
      </div>
    </div>
  );
}