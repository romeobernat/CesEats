import Commande from "../../models/mongodb/commande.model"

export const getAllCommande = async (req, res, next) => {
    const allCommande = await Commande.find();
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: allCommande });
  };

export const createCommande = async (req, res, next) => {
    var commande = await Commande.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "Todo created successfully", data: commande });
  };

export const getCommandeById = async (req, res, next) => {
    const { _id } = req.params;
    const CommandeById = await Commande.findById(_id);
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: CommandeById });
  };

export const updateCommande = async (req, res, next) => {
  const { _id } = req.params;
  await Commande.findByIdAndUpdate({ _id }, { ...req.body });
  const updatedCommande = await Commande.findById(_id);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedCommande});
};

export const deleteCommande = async (req, res, next) => {
  const { _id } = req.params;
  const deletedTodo = await Commande.findById(_id);
  await Commande.findByIdAndDelete(_id);
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};