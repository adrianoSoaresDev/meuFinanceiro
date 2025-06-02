"use client";
import { useState } from "react";
import Button from "../../ui/button/Button";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { PaymentMethodBase, MethodPayment } from "@/types/payment-method";
import Select, { Option } from "@/components/form/Select";

interface Props {
  options: Option[];
  onSave: (data: PaymentMethodBase) => Promise<void>;
  onBack: () => void;
}
export default function PaymentTypeForm({
  options,
  onBack,
  onSave
}: Props) {
  const [formData, setForm] = useState<PaymentMethodBase>({
    icon: "",
    name: "",
    status: true,
    type: "CC"
  });
  return (
    <form className="">
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        <div className="col-span-1">
          <Label>Nome</Label>
          <Input
            type="text"
            placeholder="Ex: Cartão de Crédito"
            defaultValue={formData.name}
            onChange={(event) => setForm((currentValue => ({ ...currentValue, name: String(event.target.value) })))} />
        </div>

        <div className="col-span-1">
          <Label>Tipo</Label>
          <Select
            options={options}
            onChange={function (value: string): void {
              setForm(currentValue => ({ ...currentValue, type: value as MethodPayment }));
            }} />
        </div>
      </div>

      <div className="flex items-center justify-end w-full gap-3 mt-6">
        <Button size="sm" variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <Button size="sm" onClick={(e) => {
          e.preventDefault();
          onSave(formData);
        }}>
          Salvar
        </Button>
      </div>
    </form>
  );
}
