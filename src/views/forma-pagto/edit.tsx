"use client";
import { useMemo, useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import { useRouter } from "next/navigation";
import { PaymentMethod, PaymentMethodBase } from "@/types/payment-method";
import PaymentTypeForm from "@/components/meu-financeiro/forma-pagto/form";
import { paymentMethodProvider } from "@/providers/payment-method-provider";
import Alert from "@/components/ui/alert/Alert";
import { PAYMENT_METHOD_OPTIONS } from "@/constants/payment-method";

interface Props {
  data: PaymentMethod;
}
export function EditPaymentMethodView({ data }: Props) {
  const { push, } = useRouter();
  const [error, setError] = useState<boolean | string>(false);
  const { put, remove } = paymentMethodProvider();
  const handleSave = async (payload: PaymentMethodBase) => {
    try {
      await put({ ...payload, id: data.id });
      return push("/forma-pagto");
    } catch (error) {
      setError(error.message);
    }
  };
  const onBack = () => push("/forma-pagto");
  const handleRemove = useMemo(() => async () => {
    try {
      await remove(data.id);
      return push("/forma-pagto/");
    } catch (error) {
      setError(error.message);
    }
  }, [push, remove]);

  return (
    <ComponentCard title="Editar Forma de Pagamento">
      {error && <Alert
        message={String(error)}
        title="Ocorreu um erro durante o cadastro"
        variant="error"
      />}
      <PaymentTypeForm
        data={data}
        onBack={onBack}
        onSave={handleSave}
        onRemove={handleRemove}
        options={PAYMENT_METHOD_OPTIONS}
      />
    </ComponentCard>
  );
}