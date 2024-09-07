import { Request, Response } from "express";
import { Usuario } from "../../models/Usuario";

export const getList = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const findOptions: any = {
      where: {},
    }

    if (email) {
      findOptions.where.email = email;
    }

    const usuarios = await Usuario.findAndCountAll(findOptions);

    return res.json(usuarios);
  } catch (err) {
    res.status(500).send(err);
  }
};
