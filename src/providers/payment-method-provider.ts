import { PaymentMethod, PaymentMethodBase } from "@/types/payment-method";

const ENDPOINT = "payment-type";
const PATH = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${ENDPOINT}`;

export function paymentTypeProvider() {
  const get = async (id: number): Promise<PaymentMethod> => {
    try {
      const response = await fetch(`${PATH}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const getAll = async (): Promise<PaymentMethod[]> => {
    try {
      const response = await fetch(PATH);
      if (response.status == 404) return [];
      const data = await response.json();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const put = async (data: PaymentMethod): Promise<PaymentMethod> => {
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

  const post = async (payload: PaymentMethodBase): Promise<PaymentMethod> => {
    try {
      const response = await fetch(`${PATH}`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw response;
      const data: PaymentMethod = await response.json();
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
