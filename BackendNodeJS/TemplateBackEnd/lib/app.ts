import * as express from "express";
import * as bodyParser from "body-parser";
import router from "./config/routes";
import {mysql} from "./config/mysql"

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    mysql.sync();
    this.app.use("/", router)
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
  }
}

export default new App().app;