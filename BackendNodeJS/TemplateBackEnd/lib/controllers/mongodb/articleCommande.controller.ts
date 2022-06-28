import ArticleCommande from "../../models/mongodb/articleCommande.model"

export const getAllArticleCommande = async () => {
    const articleCommandes = await ArticleCommande.find({});
    return articleCommandes;
}

export const createArticleCommande = (ArticleCommandeData:JSON) => {
    const articleCommande = new ArticleCommande(ArticleCommandeData);
    return articleCommande.save();
}

export const getOneArticleCommande = async (req:any) => {
    const articleCommande = await ArticleCommande.findOne( {_id: req.params.id})
    return articleCommande
}
export const getArticlebyId = async (id:any) => {
    const article = await ArticleCommande.findOne( {_id: id})
    return article
}

// export const getOneArticlebyArticleCommande = async (req:any) => {
//     const articleCommande = await ArticleCommandeModel.find().where(_id: req.params.restau_id &&  )
//     const articles = 
//     console.log("dddddddddddddddddddddd",articleCommande)
//     return articleCommande;
// }

// export const updateOneArticle = async (req:any) => {
//     const article = await ArticleCommandeModel.findOneAndUpdate({_id: req.params.id}, req.body, {
//         new: true
//     });
//     article.save();
// }

export const deleteArticle = (articleID:any) => {
    ArticleCommande.deleteOne({_id:articleID}, function (err){
        if (err) return console.log(err)
    })
};