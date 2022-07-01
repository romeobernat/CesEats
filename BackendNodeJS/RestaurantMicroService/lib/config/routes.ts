import { Router } from "express";
import * as RestaurantController from "../controllers/mongodb/restaurant.controller";

// CRUD MYSQL

import {
  createAccount,
  deleteAccount,
  getAllAccount,
  updateAccount,
  getAccountById,
} from "../controllers/mysql/account.controller";

import {
  createCountry,
  deleteCountry,
  getAllCountry,
  updateCountry,
  getCountryById,
} from "../controllers/mysql/country.controller";

import {
  createCity,
  deleteCity,
  getAllCity,
  updateCity,
  getCityById,
} from "../controllers/mysql/city.controller";

import {
  createAccountType,
  deleteAccountType,
  getAllAccountType,
  updateAccountType,
  getAccountTypeById,
} from "../controllers/mysql/accountType.controller";

// CRUD MONGODB

import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurant,
  updateRestaurant,
  getRestaurantById,
} from "../controllers/mongodb/restaurant.controller";

import {
  createArticle,
  deleteArticle,
  getAllArticle,
  updateArticle,
  getArticleById,
  getAllArticleFromRestaurantId,
  createArticleForRestaurantId,
} from "../controllers/mongodb/article.controller";

import {
  createArticleCommande,
  deleteArticleCommande,
  getAllArticleCommande,
  updateArticleCommande,
  getArticleCommandeById,
} from "../controllers/mongodb/articleCommande.controller";

import {
  createCommande,
  deleteCommande,
  getAllCommande,
  updateCommande,
  getCommandeById,
} from "../controllers/mongodb/commande.controller";

import {
  createType,
  deleteType,
  getAllType,
  updateType,
  getTypeById,
} from "../controllers/mongodb/type.controller";

const router = Router();

// ROUTES MYSQL AVEC SEQUELIZE

router.post("/account/", createAccount);
router.get("/account/", getAllAccount);
router.get("/account/:id_person", getAccountById);
router.put("/account/:id_person", updateAccount);
router.delete("/account/:id_person", deleteAccount);

router.post("/country/", createCountry);
router.get("/country/", getAllCountry);
router.get("/country/:country", getCountryById);
router.put("/country/:country", updateCountry);
router.delete("/country/:country", deleteCountry);

router.post("/City/", createCity);
router.get("/City/", getAllCity);
router.get("/City/:postal_code", getCityById);
router.put("/City/:postal_code", updateCity);
router.delete("/City/:postal_code", deleteCity);

router.post("/accountType/", createAccountType);
router.get("/accountType/", getAllAccountType);
router.get("/accountType/:id_type", getAccountTypeById);
router.put("/accountType/:id_type", updateAccountType);
router.delete("/accountType/:id_type", deleteAccountType);



// ROUTES MONGODB AVEC MONGOOSE

router.post("/restaurant/", createRestaurant);
router.get("/restaurant/", getAllRestaurant);
router.get("/restaurant/:_id", getRestaurantById);
router.put("/restaurant/:_id", updateRestaurant);
router.delete("/restaurant/:_id", deleteRestaurant);

router.post("/article/", createArticle);
router.get("/article/", getAllArticle);
router.get("/article/:_id", getArticleById);
router.put("/article/:_id", updateArticle);
router.delete("/article/:_id", deleteArticle);
router.get("/articleFromRestaurant/:_id", getAllArticleFromRestaurantId);
router.post("/articleForRestaurantId/:_id", createArticleForRestaurantId);

router.post("/articleCommande/", createArticleCommande);
router.get("/articleCommande/", getAllArticleCommande);
router.get("/articleCommande/:_id", getArticleCommandeById);
router.put("/articleCommande/:_id", updateArticleCommande);
router.delete("/articleCommande/:_id", deleteArticleCommande);

router.post("/commande/", createCommande);
router.get("/commande/", getAllCommande);
router.get("/commande/:_id", getCommandeById);
router.put("/commande/:_id", updateCommande);
router.delete("/commande/:_id", deleteCommande);

router.post("/type/", createType);
router.get("/type/", getAllType);
router.get("/type/:_id", getTypeById);
router.put("/type/:_id", updateType);
router.delete("/type/:_id", deleteType);

export default router;