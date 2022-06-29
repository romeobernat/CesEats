import Type from "../../models/mongodb/type.model"

export const getAllType = async () => {
    const type = await Type.find({});
    return type;
}

export const createType = (TypeData:JSON) => {
    const type = new Type(TypeData);
    return type.save();
}

export const getOneType = async (req:any) => {
    const type = await Type.findOne( {_id: req.params.id})
    return type
}
export const getArticlebyId = async (id:any) => {
    const article = await Type.findOne( {_id: id})
    return article
}

// export const getOneArticlebyType = async (req:any) => {
//     const type = await TypeModel.find().where(_id: req.params.restau_id &&  )
//     const articles = 
//     console.log("dddddddddddddddddddddd",type)
//     return type;
// }

// export const updateOneArticle = async (req:any) => {
//     const article = await TypeModel.findOneAndUpdate({_id: req.params.id}, req.body, {
//         new: true
//     });
//     article.save();
// }

export const deleteArticle = (articleID:any) => {
    Type.deleteOne({_id:articleID}, function (err){
        if (err) return console.log(err)
    })
};