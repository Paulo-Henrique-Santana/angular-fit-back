import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { Usuario } from "../../models/Usuario";
import { salt } from "../../utils/salt";

export const cadastro = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;

    const emailAlredyRegistered = await Usuario.findOne({
      where: { email },
    });

    if (emailAlredyRegistered) {
      res
        .status(409)
        .send({ mensagem: "Email já cadastrado!"});
    }

    const encryptedPassword = bcrypt.hashSync(
      senha,
      salt
    );

    const prestador = await Usuario.create({
      ...req.body,
      senha: encryptedPassword,
    });

    return res.json(prestador);
  } catch (err) {
    res.status(500).send(err);
  }
};
