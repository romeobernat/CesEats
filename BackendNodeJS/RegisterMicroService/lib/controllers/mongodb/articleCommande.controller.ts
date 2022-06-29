import ArticleCommande from "../../models/mongodb/articleCommande.model"

export const getAllArticleCommande = async () => {
    const articleCommandes = await ArticleCommande.find();
    return articleCommandes;
}

export const createArticleCommande = (ArticleCommandeData:JSON) => {
    const articleCommande = new ArticleCommande(ArticleCommandeData);
    return articleCommande.save();
}

export const getArticleCommandeById = async (req:any) => {
    const articleCommande = await ArticleCommande.findById(req.params.restau_id);
    return articleCommande;
}

export const updateArticleCommande = async (req:any) => {
    const articleCommande = await ArticleCommande.findByIdAndUpdate(req.params.id, req.body);
    articleCommande.save();
}

export const deleteArticleCommande = (req:any) => {
    ArticleCommande.findByIdAndDelete(req.params.id)
};