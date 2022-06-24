import {Request, Response} from "express";
import {AccountsController} from "../controllers/accounts.controller";

export class Routes {
  public accountsController: AccountsController = new AccountsController();

  public routes(app): void {
    app.route("/").get(this.accountsController.index);

    app.route("/accounts").get(this.accountsController.index);
  }
}