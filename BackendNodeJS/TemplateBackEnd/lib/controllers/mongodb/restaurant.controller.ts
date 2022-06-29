import Restaurant from "../../models/mongodb/restaurant.model"

export const getAllRestaurant = async () => {
    const restaurants = await Restaurant.find();
    return restaurants;
}

export const createRestaurant = async (req, res, next) => {
    var restaurant = await Restaurant.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "Todo created successfully", data: restaurant });
  };

export const getRestaurantById = async (req:any) => {
    const restaurant = await Restaurant.findById(req.params.restau_id);
    return restaurant;
}

export const updateRestaurant = async (req:any) => {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body);
    restaurant.save();
}

export const deleteRestaurant = (req:any) => {
    Restaurant.findByIdAndDelete(req.params.id)
};