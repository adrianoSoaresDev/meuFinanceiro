"use client";
import React, { useMemo } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Table, { Records } from "@/components/tables/Table";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";
import { PaymentMethod } from "@/types/payment-method";
import { PencilIcon } from "@/icons";

interface Props {
  data: PaymentMethod[];
}

export async function SearchPaymentTypeView({ data }: Props) {
  const { push } = useRouter();
  const optionsData = useMemo(() => (payload: PaymentMethod[]) => {
    const data: Records[] = payload.map(item => {
      return [
        { value: item.name },
        { value: item.type },
        { value: item.status ? "Ativo" : "Inativo", color: item.status ? "success" : "error" },
        { value: <Button startIcon={<PencilIcon />} onClick={() => push(`forma-pagto/${item.id}`)}>edit</Button> }
      ];
    });

    return data;
  }, []);
  return (
    <div>
      <PageBreadcrumb pageTitle="Formas de Pagamento" />
      <div className="space-y-6">
        <ComponentCard title="">
          <Button onClick={() => push("/forma-pagto/cadastrar")}>Novo</Button>
          <Table title="Registros" columns={[
            "Forma",
            "Tipo",
            "Status",
            "Ação"
          ]}
            records={optionsData(data)}
          />
        </ComponentCard>
      </div>
    </div>
  );
}