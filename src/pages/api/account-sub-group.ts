import { AccountSubGroupRepository } from "@/repositories/account-sub-group-repository";
import { AccountSubGroupBase } from "@/types/account-sub-group";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const repository = new AccountSubGroupRepository();
  if (req.method == "GET") {
    if (req.query?.id) {
      const response = await repository.get(Number(req.query.id));

      if (!response)
        return res
          .status(404)
          .json({ status: "error", message: "Registro não encontrado" });

      console.log(response);

      return res.status(200).json(response);
    } else {
      const response = await repository.getAll();
      return res.status(200).json(response);
    }
  }
  if (req.method == "POST") {
    try {
      const payload: AccountSubGroupBase = JSON.parse(req.body);
      const response = await repository.post(payload);

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Ocorreu um erro durante o processo!",
      });
    }
  }
}
