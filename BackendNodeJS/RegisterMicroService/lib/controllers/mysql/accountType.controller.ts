import {Request, Response, RequestHandler} from "express";
import { AccountType } from "../../models/mysql/accountType.model";

export class AccountTypeController {
  public index(req: Request, res: Response) {
    res.json({
      message: "Here is your accountType",
    });
  }
}

export const createAccountType: RequestHandler = async (req, res, next) => {
  var accountType = await AccountType.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: accountType });
};

export const deleteAccountType: RequestHandler = async (req, res, next) => {
  const { id_type } = req.params;
  const deletedTodo: AccountType | null = await AccountType.findByPk(id_type);
  await AccountType.destroy({ where: { id_type } });
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};

export const getAllAccountType: RequestHandler = async (req, res, next) => {
  const allAccountType: AccountType[] = await AccountType.findAll();
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: allAccountType });
};

export const getAccountTypeById: RequestHandler = async (req, res, next) => {
  const { id_type } = req.params;
  const AccountTypeById: AccountType | null = await AccountType.findByPk(id_type);
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: AccountTypeById });
};

export const updateAccountType: RequestHandler = async (req, res, next) => {
  const { id_type } = req.params;
  await AccountType.update({ ...req.body }, { where: { id_type } });
  const updatedAccountType: AccountType | null = await AccountType.findByPk(id_type);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedAccountType});
};