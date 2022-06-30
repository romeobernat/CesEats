import bcrypt from 'bcrypt';
import jwt from '../jwt';
import {Request, Response, RequestHandler} from "express";
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
  //const { mail } = { ...req.body }.mail;
  //const { password } = { ...req.body }.password;
  const AccountTrue: Account | null = await Account.findOne({
    where: {
      mail: { ...req.body }.mail,
      password: { ...req.body }.password
    }
  });
  if(AccountTrue != null){
    const token = await jwt.sign({
      id_person: AccountTrue.id_person,
      mail: AccountTrue.mail,
      firstName: AccountTrue.firstName,
      lastname: AccountTrue.lastname,
      password: AccountTrue.password,
      restaurant_id: AccountTrue.restaurant_id,
      address: AccountTrue.address,
      accountType: AccountTrue.accountType,
    });
    return res
    .status(201)
    .json({ message: "The account does exist", data: token});
  }else{
    return res
    .status(401)
    .json({ message: "The account doesn't exist", data: false });
  }
};