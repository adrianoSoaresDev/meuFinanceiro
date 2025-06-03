import { HTTP_STATUS_CODE } from "@/constants/http-status";
import { PaymentMethodRepository } from "@/repositories/payment-method-repository";
import { PaymentMethodBase } from "@/types/payment-method";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const repository = new PaymentMethodRepository();
  const { id } = req.query;
  if (req.method == "GET" && id) {
    const response = await repository.get(Number(id));
    if (!response)
      return res
        .status(HTTP_STATUS_CODE.NOT_FOUND)
        .json({ status: "error", message: "Registro não encontrado" });

    return res.status(HTTP_STATUS_CODE.SUCCESS).json(response);
  }

  if (req.method == "PUT") {
    try {
      const id = Number(req.query.id);
      const payload: PaymentMethodBase = JSON.parse(req.body);
      const response = await repository.put(id, payload);

      return res.status(HTTP_STATUS_CODE.SUCCESS).json(response);
    } catch (error) {
      console.log(error);
      return res.status(HTTP_STATUS_CODE.SERVER_ERROR).json({
        status: "error",
        message: "Ocorreu um erro durante o processo!",
      });
    }
  }

  if (req.method == "DELETE") {
    try {
      const id = Number(req.query.id);
      await repository.remove(id);
      return res
        .status(HTTP_STATUS_CODE.SUCCESS)
        .json({ status: "ok", message: "Registro removido com sucesso!" });
    } catch (error) {
      console.log(error);
      return res.status(HTTP_STATUS_CODE.SERVER_ERROR).json({
        status: "error",
        message: "Ocorreu um erro durante o processo!",
      });
    }
  }

  return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
    status: "error",
    message: "Recurso não encontrado ou inexistente",
  });
}
