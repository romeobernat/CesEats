import Commande from "../../models/mongodb/commande.model"

export const getAllCommande = async () => {
    const commandes = await Commande.find();
    return commandes;
}

export const createCommande = (CommandeData:JSON) => {
    const commande = new Commande(CommandeData);
    return commande.save();
}

export const getCommandeById = async (req:any) => {
    const commande = await Commande.findById(req.params.restau_id);
    return commande;
}

export const updateCommande = async (req:any) => {
    const commande = await Commande.findByIdAndUpdate(req.params.id, req.body);
    commande.save();
}

export const deleteCommande = (req:any) => {
    Commande.findByIdAndDelete(req.params.id)
};