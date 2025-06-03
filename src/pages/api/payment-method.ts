import { HTTP_STATUS_CODE } from "@/constants/http-status";
import { PaymentMethodRepository } from "@/repositories/payment-method-repository";
import { PaymentMethodBase } from "@/types/payment-method";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const repository = new PaymentMethodRepository();
  if (req.method == "GET") {
    if (req.query?.id) {
      const response = await repository.get(Number(req.query.id));

      if (!response)
        return res
          .status(HTTP_STATUS_CODE.NOT_FOUND)
          .json({ status: "error", message: "Registro não encontrado" });

      console.log(response);

      return res.status(HTTP_STATUS_CODE.SUCCESS).json(response);
    } else {
      const response = await repository.getAll();
      return res.status(HTTP_STATUS_CODE.SUCCESS).json(response);
    }
  }
  if (req.method == "POST") {
    try {
      const payload: PaymentMethodBase = JSON.parse(req.body);
      console.log("POST METHOD", payload);
      const response = await repository.post(payload);
      console.log(response);

      return res.status(HTTP_STATUS_CODE.SUCCESS).json(response);
    } catch (error) {
      console.log(error);
      return res.status(HTTP_STATUS_CODE.SERVER_ERROR).json({
        status: "error",
        message: "Ocorreu um erro durante o processo!",
      });
    }
  }
}
