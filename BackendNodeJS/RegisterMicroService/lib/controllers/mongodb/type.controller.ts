import Type from "../../models/mongodb/type.model"

export const getAllType = async (req, res, next) => {
    const allType = await Type.find();
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: allType });
  };

export const createType = async (req, res, next) => {
    var type = await Type.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "Todo created successfully", data: type });
  };

export const getTypeById = async (req, res, next) => {
    const { _id } = req.params;
    const TypeById = await Type.findById(_id);
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: TypeById });
  };

export const updateType = async (req, res, next) => {
  const { _id } = req.params;
  await Type.findByIdAndUpdate({ _id }, { ...req.body });
  const updatedType = await Type.findById(_id);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedType});
};

export const deleteType = async (req, res, next) => {
  const { _id } = req.params;
  const deletedTodo = await Type.findById(_id);
  await Type.findByIdAndDelete(_id);
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};