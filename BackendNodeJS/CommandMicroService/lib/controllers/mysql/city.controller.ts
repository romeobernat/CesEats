import {Request, Response, RequestHandler} from "express";
import { City } from "../../models/mysql/city.model";

export class CityController {
  public index(req: Request, res: Response) {
    res.json({
      message: "Here is your city",
    });
  }
}

export const createCity: RequestHandler = async (req, res, next) => {
  var city = await City.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: city });
};

export const deleteCity: RequestHandler = async (req, res, next) => {
  const { postal_code } = req.params;
  const deletedTodo: City | null = await City.findByPk(postal_code);
  await City.destroy({ where: { postal_code } });
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};

export const getAllCity: RequestHandler = async (req, res, next) => {
  const allCity: City[] = await City.findAll();
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: allCity });
};

export const getCityById: RequestHandler = async (req, res, next) => {
  const { postal_code } = req.params;
  const CityById: City | null = await City.findByPk(postal_code);
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: CityById });
};

export const updateCity: RequestHandler = async (req, res, next) => {
  const { postal_code } = req.params;
  await City.update({ ...req.body }, { where: { postal_code } });
  const updatedCity: City | null = await City.findByPk(postal_code);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedCity});
};