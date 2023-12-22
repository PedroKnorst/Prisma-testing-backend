import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { createUser, getAll, getById } from "../repository/user.repository";
import { userValidation } from "../validations/user.validation";

export const create = async (req: Request, res: Response) => {
  try {
    await userValidation.validate(req.body);

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    const user = await createUser(req.body);
    return res.json(user);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const users = await getAll();
    return res.json(users);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const getUnique = async (req: Request, res: Response) => {
  try {
    const user = await getById(Number(req.params.id));
    return res.json(user);
  } catch (error) {
    return res.status(400).send(error);
  }
};
