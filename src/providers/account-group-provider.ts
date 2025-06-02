import { AccountGroup, AccountGroupBase } from "@/types/account-group";

const ENDPOINT = "account-group";
const PATH = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${ENDPOINT}`;

export function accountGroupProvider() {
  const get = async (id: number): Promise<AccountGroup> => {
    try {
      const response = await fetch(`${PATH}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const getAll = async (): Promise<AccountGroup[]> => {
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
        name: "Receita",
        status: true,
      },
      { id: 2, name: "Alimentação", status: true },
      { id: 3, name: "Moradia", status: true },
      { id: 4, name: "Educação", status: true },
      { id: 5, name: "Animais", status: true },
      { id: 6, name: "Saúde", status: true },
      { id: 7, name: "Transporte", status: true },
      { id: 8, name: "Pessoais", status: true },
      { id: 9, name: "Lazer", status: true },
      { id: 10, name: "Serviços Financeiros", status: true },
    ];
  };

  const put = async (data: AccountGroup): Promise<AccountGroup> => {
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

  const post = async (payload: AccountGroupBase): Promise<AccountGroup> => {
    try {
      const response = await fetch(`${PATH}`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      console.log(response);

      if (!response.ok) throw response;
      const data: AccountGroup = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  const remove = (id: number) => {
    return {
      status: "ok",
      mensagem: "Funcionalidade não implementada!",
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
