import { Account } from "../models/mysql/account.model";
import { AccountType } from "../models/mysql/accountType.model";
import { City } from "../models/mysql/city.model";
import { Country } from "../models/mysql/country.model";
import {Sequelize} from "sequelize-typescript";

export const mysql = new Sequelize({
  database: "bernat_ceseats",
  dialect: "mysql",
  username: "bernat_admin",
  password: "P@t1ss€r1€",
  host: "mysql-bernat.alwaysdata.net",
  models: [Account, AccountType, City, Country]
});

try {
  mysql.authenticate();
} catch (error) {
  console.error('Unable to connect to the database:', error);
  process.exit(1);
}