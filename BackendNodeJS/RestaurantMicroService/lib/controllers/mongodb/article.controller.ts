import Article from "../../models/mongodb/article.model"
import Restaurant from "../../models/mongodb/restaurant.model"

export const getAllArticle = async (req, res, next) => {
    const allArticle = await Article.find();
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: allArticle });
  };

export const getAllArticleFromRestaurantId = async (req, res, next) => {
  const { _id } = req.params;
  const restaurant = await Restaurant.findById(_id);
  const articles = await Article.find( {'_id' : { $in: restaurant.articles }} );
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: articles });
  };

export const createArticle = async (req, res, next) => {
    var article = await Article.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "Todo created successfully", data: article });
  };

  export const createArticleForRestaurantId = async (req, res, next) => {
    const { _id } = req.params;
    var article = await Article.create({ ...req.body });
    await Restaurant.findByIdAndUpdate({ _id }, {$push: {articles: article._id}});
    return res
      .status(200)
      .json({ message: "Todo created successfully", data: article });
  };

export const getArticleById = async (req, res, next) => {
    const { _id } = req.params;
    const ArticleById = await Article.findById(_id);
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: ArticleById });
  };

export const updateArticle = async (req, res, next) => {
  const { _id } = req.params;
  await Article.findByIdAndUpdate({ _id }, { ...req.body });
  const updatedArticle = await Article.findById(_id);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedArticle});
};

export const deleteArticle = async (req, res, next) => {
  const { _id } = req.params;
  const deletedTodo = await Article.findById(_id);
  await Article.findByIdAndDelete(_id);
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};