"use client";
import { useState } from "react";
import Button from "../../ui/button/Button";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { PaymentMethodBase, MethodPayment, PaymentMethod } from "@/types/payment-method";
import Select, { Option } from "@/components/form/Select";
import { CheckLineIcon, ChevronLeftIcon, TrashBinIcon } from "@/icons";

interface Props {
  data?: PaymentMethod;
  options: Option[];
  onSave: (data: PaymentMethodBase) => Promise<void>;
  onBack: () => void;
  onRemove?: () => void;
}
export default function PaymentTypeForm({
  data,
  options,
  onBack,
  onSave,
  onRemove
}: Props) {
  const [formData, setForm] = useState<PaymentMethodBase>({
    icon: data?.icon || "",
    name: data?.name || "",
    status: data?.status || true,
    type: data?.type || "CC"
  });
  const [hasValidError, setValidateError] = useState(false);

  const handleSave = () => {
    if (formData.name == "") setValidateError(true);
    else if (formData.type == "") setValidateError(true);
    else onSave(formData);

  };
  return (
    <form className="">
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-12">
        {data && <div className="col-span-1">
          <Label>ID</Label>
          <Input
            type="text"
            defaultValue={data?.id.toString().padStart(2, "0")}
          />
        </div>}
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        <div className="col-span-1">
          <Label>Nome</Label>
          <Input
            type="text"
            required
            hint={hasValidError && formData.name == "" ? "Campo obrigatório" : undefined}
            error={hasValidError && formData.name == ""}
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
            }}
            defaultValue={formData?.type}
          />
        </div>
      </div>

      <div className="flex items-center justify-end w-full gap-3 mt-6">
        <Button
          size="sm"
          variant="danger"
          startIcon={<TrashBinIcon />}
          onClick={onRemove}
          disabled={!data}
        >
          Excluir
        </Button>
        <Button size="sm" variant="outline" startIcon={<ChevronLeftIcon />} onClick={onBack}>
          Voltar
        </Button>
        <Button size="sm"
          startIcon={<CheckLineIcon />}
          onClick={(e) => {
            e.preventDefault();
            handleSave();
          }}>
          Salvar
        </Button>
      </div>
    </form>
  );
}
