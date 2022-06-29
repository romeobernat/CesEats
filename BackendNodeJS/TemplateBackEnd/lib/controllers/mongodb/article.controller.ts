import Article from "../../models/mongodb/article.model"

export const getAllArticle = async () => {
    const articles = await Article.find({});
    return articles;
}

export const createArticle = (ArticleData:JSON) => {
    const article = new Article(ArticleData);
    return article.save();
}

export const getOneArticle = async (req:any) => {
    const article = await Article.findOne( {_id: req.params.id})
    return article
}
export const getArticlebyId = async (id:any) => {
    const article = await Article.findOne( {_id: id})
    return article
}

// export const getOneArticlebyArticle = async (req:any) => {
//     const article = await ArticleModel.find().where(_id: req.params.restau_id &&  )
//     const articles = 
//     console.log("dddddddddddddddddddddd",article)
//     return article;
// }

// export const updateOneArticle = async (req:any) => {
//     const article = await ArticleModel.findOneAndUpdate({_id: req.params.id}, req.body, {
//         new: true
//     });
//     article.save();
// }

export const deleteArticle = (articleID:any) => {
    Article.deleteOne({_id:articleID}, function (err){
        if (err) return console.log(err)
    })
};