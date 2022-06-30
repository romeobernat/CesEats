import ArticleCommande from "../../models/mongodb/articleCommande.model"

export const getAllArticleCommande = async (req, res, next) => {
    const allArticleCommande = await ArticleCommande.find();
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: allArticleCommande });
  };

export const createArticleCommande = async (req, res, next) => {
    var articleCommande = await ArticleCommande.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "Todo created successfully", data: articleCommande });
  };

export const getArticleCommandeById = async (req, res, next) => {
    const { _id } = req.params;
    const ArticleCommandeById = await ArticleCommande.findById(_id);
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: ArticleCommandeById });
  };

export const updateArticleCommande = async (req, res, next) => {
  const { _id } = req.params;
  await ArticleCommande.findByIdAndUpdate({ _id }, { ...req.body });
  const updatedArticleCommande = await ArticleCommande.findById(_id);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedArticleCommande});
};

export const deleteArticleCommande = async (req, res, next) => {
  const { _id } = req.params;
  const deletedTodo = await ArticleCommande.findById(_id);
  await ArticleCommande.findByIdAndDelete(_id);
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};