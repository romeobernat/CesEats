import Article from "../../models/mongodb/article.model"

export const getAllArticle = async () => {
    const articles = await Article.find();
    return articles;
}

export const createArticle = (ArticleData:JSON) => {
    const article = new Article(ArticleData);
    return article.save();
}

export const getArticleById = async (req:any) => {
    const article = await Article.findById(req.params.restau_id);
    return article;
}

export const updateArticle = async (req:any) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body);
    article.save();
}

export const deleteArticle = (req:any) => {
    Article.findByIdAndDelete(req.params.id)
};