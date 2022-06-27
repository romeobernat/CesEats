import {Request, Response, RequestHandler} from "express";
import { Country } from "../models/country.model";

export class CountrysController {
  public index(req: Request, res: Response) {
    res.json({
      message: "Here is your country",
    });
  }
}

export const createCountry: RequestHandler = async (req, res, next) => {
  var country = await Country.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: country });
};

export const deleteCountry: RequestHandler = async (req, res, next) => {
  const { country } = req.params;
  const deletedTodo: Country | null = await Country.findByPk(country);
  await Country.destroy({ where: { country } });
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};

export const getAllCountry: RequestHandler = async (req, res, next) => {
  const allCountry: Country[] = await Country.findAll();
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: allCountry });
};

export const getCountryById: RequestHandler = async (req, res, next) => {
  const { country } = req.params;
  const CountryById: Country | null = await Country.findByPk(country);
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: CountryById });
};

export const updateCountry: RequestHandler = async (req, res, next) => {
  const { country } = req.params;
  await Country.update({ ...req.body }, { where: { country } });
  const updatedCountry: Country | null = await Country.findByPk(country);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedCountry});
};