import { Router } from "express";

import {
  createAccount,
  deleteAccount,
  getAllAccount,
  updateAccount,
  getAccountById,
} from "../controllers/account.controller";

import {
  createCountry,
  deleteCountry,
  getAllCountry,
  updateCountry,
  getCountryById,
} from "../controllers/country.controller";

import {
  createCity,
  deleteCity,
  getAllCity,
  updateCity,
  getCityById,
} from "../controllers/city.controller";

import {
  createAccountType,
  deleteAccountType,
  getAllAccountType,
  updateAccountType,
  getAccountTypeById,
} from "../controllers/accountType.controller";

const router = Router();

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

export default router;