"use client";
import React, { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import Button from "../../components/ui/button/Button";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Select from "../../components/form/Select";
import { useRouter } from "next/navigation";
import { PaymentType, PaymentTypeBase, TypePayment } from "@/app/types/payment-type";
import PaymentTypeForm from "@/components/meu-financeiro/forma-pagto/form";
import { paymentTypeProvider } from "@/providers/payment-method-provider";
import Alert from "@/components/ui/alert/Alert";

const options = [
  {
    label: "Cartão de Crédito",
    value: "CC"
  },
  {
    label: "Débito",
    value: "DB"
  },
  {
    label: "Depósito",
    value: "DP"
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
  const { back } = useRouter();
  const [error, setError] = useState<boolean | string>(false);
  const { post } = paymentTypeProvider();
  const handleSave = async (data: PaymentTypeBase): Promise<PaymentType> => {
    try {
      const result = await post(data);
      return result;
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