import { AccountSubGroup, AccountSubGroupBase } from "@/types/account-sub-group";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Select, { Option } from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import { useEffect, useState } from "react";

interface Props {
  accountGroupOptions: Option[],
  onBack: () => void;
  onSave: (data: AccountSubGroupBase) => Promise<void>;
}
export function AccountSubGroupForm({ accountGroupOptions, onBack, onSave }: Props) {
  const [form, setForm] = useState<AccountSubGroupBase>({
    accountGroupId: 0,
    name: "",
    status: true
  });

  useEffect(() => {
    console.log(form);

  }, [form]);

  return (
    <form className="">
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        <div className="col-span-1">
          <Label>Grupo de Conta</Label>
          <Select
            onChange={(value) => {
              setForm((currentValue => ({ ...currentValue, accountGroupId: Number(value) })));
            }}
            options={accountGroupOptions}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        <div className="col-span-1">
          <Label>Nome</Label>
          <Input
            type="text"
            placeholder="Ex: mercado"
            defaultValue={form.name}
            onChange={(event) => {
              setForm((currentValue => ({ ...currentValue, name: String(event.target.value.trim()) })));
            }
            } />
        </div>
      </div>

      <div className="flex items-center justify-end w-full gap-3 mt-6">
        <Button size="sm" variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <Button size="sm" onClick={(e) => {
          e.preventDefault();
          onSave(form);
        }}>
          Salvar
        </Button>
      </div>
    </form>
  );
}