import {Request, Response, RequestHandler} from "express";
import { and } from "sequelize/types";
import { Account } from "../../models/mysql/account.model";

export class AccountController {
  public index(req: Request, res: Response) {
    res.json({
      message: "Here is your account",
    });
  }
}

export const createAccount: RequestHandler = async (req, res, next) => {
  var account = await Account.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: account });
};

export const deleteAccount: RequestHandler = async (req, res, next) => {
  const { id_person } = req.params;
  const deletedTodo: Account | null = await Account.findByPk(id_person);
  await Account.destroy({ where: { id_person } });
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};

export const getAllAccount: RequestHandler = async (req, res, next) => {
  const allAccount: Account[] = await Account.findAll();
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: allAccount });
};

export const getAccountById: RequestHandler = async (req, res, next) => {
  const { id_person } = req.params;
  const AccountById: Account | null = await Account.findByPk(id_person);
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: AccountById });
};

export const updateAccount: RequestHandler = async (req, res, next) => {
  const { id_person } = req.params;
  await Account.update({ ...req.body }, { where: { id_person } });
  const updatedAccount: Account | null = await Account.findByPk(id_person);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedAccount});
};

export const isAccountTrue: RequestHandler = async (req, res, next) => {
  const { mail } = req.params;
  const { password } = req.params;
  const AccountTrue: Account | null = await Account.findOne({
    where: {
      mail: mail,
      password: password
    }
  });
  if(AccountTrue != null){
    return res
    .status(200)
    .json({ message: "The account exist", data: true });
  }else{
    return res
    .status(200)
    .json({ message: "The account doesn't exist", data: false });
  }
};