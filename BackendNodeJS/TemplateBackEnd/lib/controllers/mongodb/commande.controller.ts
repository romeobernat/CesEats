import Commande from "../../models/mongodb/commande.model"

export const getAllCommande = async () => {
    const commandes = await Commande.find({});
    return commandes;
}

export const createCommande = (CommandeData:JSON) => {
    const commande = new Commande(CommandeData);
    return commande.save();
}

export const getOneCommande = async (req:any) => {
    const commande = await Commande.findOne( {_id: req.params.id})
    return commande
}
export const getArticlebyId = async (id:any) => {
    const article = await Commande.findOne( {_id: id})
    return article
}

// export const getOneArticlebyCommande = async (req:any) => {
//     const commande = await CommandeModel.find().where(_id: req.params.restau_id &&  )
//     const articles = 
//     console.log("dddddddddddddddddddddd",commande)
//     return commande;
// }

// export const updateOneArticle = async (req:any) => {
//     const article = await CommandeModel.findOneAndUpdate({_id: req.params.id}, req.body, {
//         new: true
//     });
//     article.save();
// }

export const deleteArticle = (articleID:any) => {
    Commande.deleteOne({_id:articleID}, function (err){
        if (err) return console.log(err)
    })
};