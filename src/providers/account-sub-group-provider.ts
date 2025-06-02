import {
  AccountSubGroup,
  AccountSubGroupBase,
} from "@/types/account-sub-group";

const ENDPOINT = "account-sub-group";
const PATH = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${ENDPOINT}`;

export function accountSubGroupProvider() {
  const get = async (id: number): Promise<AccountSubGroup> => {
    try {
      const response = await fetch(`${PATH}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const getAll = async (): Promise<AccountSubGroup[]> => {
    try {
      const response = await fetch(PATH);
      if (response.status == 404) return [];
      const data = await response.json();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
    return [
      {
        id: 1,
        name: " Salário  / Adiantamento /  Renda Autônomo",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Férias", accountGroupId: 1, status: true },
      { id: 1, name: " 13º salário", accountGroupId: 1, status: true },
      { id: 1, name: " Dividendos", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Receita extra (aluguel, restituição IR)",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Outras Receitas", accountGroupId: 1, status: true },
      { id: 1, name: " Supermercado", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Feira  / Sacolão / Açougue",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Padaria", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Refeição fora de casa/ Dellivery",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Outros (café, água, sorvetes, etc)",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Prestação /Aluguel de imóvel",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Condomínio", accountGroupId: 1, status: true },
      { id: 1, name: " Consumo de água", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Serviço de limpeza( diarista ou mensalista)",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Energia Elétrica", accountGroupId: 1, status: true },
      { id: 1, name: " Gás", accountGroupId: 1, status: true },
      { id: 1, name: " IPTU", accountGroupId: 1, status: true },
      { id: 1, name: " Decoração da casa", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Manutenção / Reforma da casa",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Celular", accountGroupId: 1, status: true },
      { id: 1, name: " Telefone fixo", accountGroupId: 1, status: true },
      { id: 1, name: " Internet / TV a cabo", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Matricula Escolar/ Mensalidade ",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Material Escolar", accountGroupId: 1, status: true },
      { id: 1, name: " Outros cursos", accountGroupId: 1, status: true },
      { id: 1, name: " Transporte escolar", accountGroupId: 1, status: true },
      { id: 1, name: " Ração ", accountGroupId: 1, status: true },
      { id: 1, name: " Banho / Tosa", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Veterinário / medicamento",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Outros (acessórios, brinquedos, hotel, dog walker)",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Plano de saúde", accountGroupId: 1, status: true },
      { id: 1, name: " Medicamentos", accountGroupId: 1, status: true },
      { id: 1, name: " Dentista", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Terapia / Psicólogo  / Acupuntura",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Médicos/Exames fora do plano de saúde",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Academia / Tratamento Estético",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Ônibus / Metrô", accountGroupId: 1, status: true },
      { id: 1, name: " Taxi", accountGroupId: 1, status: true },
      { id: 1, name: " Combustível", accountGroupId: 1, status: true },
      { id: 1, name: " Estacionamento", accountGroupId: 1, status: true },
      { id: 1, name: " Seguro Auto", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Manutenção / Lavagem / Troca de óleo",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Licenciamento", accountGroupId: 1, status: true },
      { id: 1, name: " Pedágio", accountGroupId: 1, status: true },
      { id: 1, name: " IPVA", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Vestuário / Calçados / Acessórios",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Cabeleireiro / Manicure / Higiene pessoal",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Presentes/Doação", accountGroupId: 1, status: true },
      { id: 1, name: " Outros  ", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Cinema / Teatro / Shows",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Livros / Streaming /Games",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Clube / Parques / Casa Noturna",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Viagens ", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Restaurantes / Bares / Festas",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Empréstimos", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Seguros (vida/residencial)",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Investimentos(Reservas / Poupança/ Outros)",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Juros Cheque Especial",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Tarifas bancárias", accountGroupId: 1, status: true },
      {
        id: 1,
        name: " Financiamento de veículo",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Pagamento da fatura do cartão de crédito",
        accountGroupId: 1,
        status: true,
      },
      {
        id: 1,
        name: " Imposto de Renda a Pagar ",
        accountGroupId: 1,
        status: true,
      },
      { id: 1, name: " Saqu", accountGroupId: 1, status: true },
    ];
  };

  const put = async (data: AccountSubGroup): Promise<AccountSubGroup> => {
    try {
      const { id, ...body } = data;
      const response = await fetch(`${PATH}/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const post = async (
    payload: AccountSubGroupBase
  ): Promise<AccountSubGroup> => {
    try {
      const response = await fetch(`${PATH}`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw response;
      const data: AccountSubGroup = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  const remove = (id: number) => {
    return {
      status: "ok",
      mensagem: "Removido com sucesso!",
    };
  };

  return {
    get,
    getAll,
    put,
    post,
    remove,
  };
}
