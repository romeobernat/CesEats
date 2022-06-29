import Restaurant from "../../models/mongodb/restaurant.model"

export const getAllRestaurant = async (req, res, next) => {
    const allRestaurant = await Restaurant.find();
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: allRestaurant });
  };

export const createRestaurant = async (req, res, next) => {
    var restaurant = await Restaurant.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "Todo created successfully", data: restaurant });
  };

export const getRestaurantById = async (req, res, next) => {
    const { _id } = req.params;
    const RestaurantById = await Restaurant.findById(_id);
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: RestaurantById });
  };

export const updateRestaurant = async (req, res, next) => {
  const { _id } = req.params;
  await Restaurant.findByIdAndUpdate({ _id }, { ...req.body });
  const updatedRestaurant = await Restaurant.findById(_id);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedRestaurant});
};

export const deleteRestaurant = async (req, res, next) => {
  const { _id } = req.params;
  const deletedTodo = await Restaurant.findById(_id);
  await Restaurant.findByIdAndDelete(_id);
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};