"use client";
import React, { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import { useRouter } from "next/navigation";
import { PaymentMethodBase } from "@/types/payment-method";
import PaymentTypeForm from "@/components/meu-financeiro/forma-pagto/form";
import { paymentMethodProvider } from "@/providers/payment-method-provider";
import Alert from "@/components/ui/alert/Alert";

const options = [
  {
    label: "Cartão de Crédito (Saída)",
    value: "CC"
  },
  {
    label: "Cartão de Crédito Parcelado (Saída)",
    value: "PC"
  },
  {
    label: "Débito",
    value: "DB"
  },
  {
    label: "Depósito (Entrada)",
    value: "DP"
  },
  {
    label: "Dinheiro (Saída)",
    value: "DI"
  },
  {
    label: "Vale Alimentação",
    value: "VA"
  },
  {
    label: "Investimento",
    value: "IV"
  },
  {
    label: "Saque",
    value: "SQ"
  }
];
export function CadastrarFormaPagamentoView() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { back, push } = useRouter();
  const [error, setError] = useState<boolean | string>(false);
  const { post } = paymentMethodProvider();
  const handleSave = async (data: PaymentMethodBase) => {
    try {
      await post(data);
      return push("/forma-pagto");
    } catch (error) {
      setError(error.message);
    }
  };
  const onBack = () => back();

  return (
    <ComponentCard title="Forma de Pagamento">
      {error && <Alert
        message={String(error)}
        title="Ocorreu um erro durante o cadastro"
        variant="error"
      />}
      <PaymentTypeForm
        onBack={onBack}
        onSave={handleSave}
        options={options}
      />
    </ComponentCard>
  );
}