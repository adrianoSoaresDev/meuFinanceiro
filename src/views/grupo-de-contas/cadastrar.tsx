"use client";
import React, { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import Button from "../../components/ui/button/Button";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { useRouter } from "next/navigation";
import { AccountGroupBase } from "@/types/account-group";
import { accountGroupProvider } from "@/providers/account-group-provider";

export function CadastrarView() {
  const { back, push } = useRouter();
  const { post } = accountGroupProvider();
  const [form, setForm] = useState<AccountGroupBase>({
    name: "",
    status: true,

  });
  const onBack = () => back();
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await post(form);
      return push("/grupo-de-contas/");
    } catch {
      push("/500");
    }

  };

  return (
    <ComponentCard title="Grupo de Contas">
      <form className="">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          <div className="col-span-1">
            <Label>Nome</Label>
            <Input type="text" placeholder="Ex: Cartão de Crédito" value={form.name} onChange={(event) => setForm((currentValue => ({ ...currentValue, name: String(event.target.value.trim()) })))} />
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