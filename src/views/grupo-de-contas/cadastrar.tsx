"use client";
import React, { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import Button from "../../components/ui/button/Button";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { useRouter } from "next/navigation";
import { AccountSubGroupBase } from "@/app/types/sub-account-group";

export function CadastrarView() {
  const { back } = useRouter();
  const handleSave = () => { };
  const onBack = () => back();

  const [form, setForm] = useState<AccountSubGroupBase>({
    idGroup: 0,
    name: "",
    status: true
  });
  return (
    <ComponentCard title="Sub Grupo de Contas">
      <form className="">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          <div className="col-span-1">
            <Label>Nome</Label>
            <Input type="text" placeholder="Ex: Cartão de Crédito" value={form.name} onChange={(value) => setForm((currentValue => ({ ...currentValue, name: String(value) })))} />
          </div>
        </div>

        <div className="flex items-center justify-end w-full gap-3 mt-6">
          <Button size="sm" variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button size="sm" onClick={handleSave}>
            Salvar
          </Button>
        </div>
      </form>
    </ComponentCard>
  );
}