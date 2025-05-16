"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Table, { Records } from "@/components/tables/Table";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";
import { PaymentType } from "@/app/types/payment-type";
import { paymentTypeProvider } from "@/providers/payment-method-provider";

const optionsData = (payload: PaymentType[]) => {
  const data: Records[] = payload.map(item => {
    return [
      { value: item.name },
      { value: item.status ? "Ativo" : "Inativo", color: item.status ? "success" : "error" },
    ];
  });

  return data;
};

export async function SearchPaymentTypeView() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();
  const { getAll } = paymentTypeProvider();
  const data = optionsData(await getAll());
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
            records={data}
          />
        </ComponentCard>
      </div>
    </div>
  );
}