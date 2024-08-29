import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Usuario } from "../../models/Usuario";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.status(401).send({
        mensagem: "Email ou senha incorretos",
      });
    }
    
    if (!bcrypt.compareSync(senha, usuario.get("senha"))) {
      return res.status(401).send({
        mensagem: "Email ou senha incorretos",
      });
    }

    const token = jwt.sign(
      {
        id: usuario.get("id"),
        nome: usuario.get("nome"),
        email: usuario.get("email"),
      },
      process.env.JWT_SECRET!,
      { expiresIn: "2h" }
    );

    return res.json({ token });
  } catch (err) {
    res.status(500).send(err);
  }
};
