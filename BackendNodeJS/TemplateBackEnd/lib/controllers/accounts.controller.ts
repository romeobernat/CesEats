import {Request, Response} from "express";

export class AccountsController {
  public index(req: Request, res: Response) {
    res.json({
      message: "Here is your account",
    });
  }
}