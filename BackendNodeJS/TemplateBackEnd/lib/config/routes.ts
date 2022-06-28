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
  getAllRestaurant,
} from "../controllers/mongodb/restaurant.controller";

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

router.get("/restaurant/", getAllRestaurant);

/*
router.get('/', async (req, res)=> {
    const data = await RestaurantController.getAllRestaurant();
    res.json(data);
    })

router.post('/', function (req, res){
        RestaurantController.createRestaurant(req.body)
    })

router.get('/:id', function (req, res) {
        RestaurantController.getOneRestaurant(req).then((restaurant) => {
            res.json(restaurant)
        })
    })
    
router.delete('/:id', function (req, res)
    {
            RestaurantController.deleteArticle(req.params.id)
    })
*/

export default router;