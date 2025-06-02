"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Table, { Records } from "@/components/tables/Table";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";
import { PaymentMethod } from "@/types/payment-method";
import { paymentTypeProvider } from "@/providers/payment-method-provider";

interface Props {
  data: PaymentMethod[];
}
const optionsData = (payload: PaymentMethod[]) => {
  const data: Records[] = payload.map(item => {
    return [
      { value: item.name },
      { value: item.type },
      { value: item.status ? "Ativo" : "Inativo", color: item.status ? "success" : "error" },
    ];
  });

  return data;
};

export async function SearchPaymentTypeView({ data }: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();
  return (
    <div>
      <PageBreadcrumb pageTitle="Formas de Pagamento" />
      <div className="space-y-6">
        <ComponentCard title="">
          <Button onClick={() => push("/forma-pagto/cadastrar")}>Novo</Button>
          <Table title="Registros" columns={[
            "Forma",
            "Tipo",
            "Status"
          ]}
            records={optionsData(data)}
          />
        </ComponentCard>
      </div>
    </div>
  );
}