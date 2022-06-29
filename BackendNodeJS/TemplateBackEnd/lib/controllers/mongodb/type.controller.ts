import Type from "../../models/mongodb/type.model"

export const getAllType = async () => {
    const types = await Type.find();
    return types;
}

export const createType = (TypeData:JSON) => {
    const type = new Type(TypeData);
    return type.save();
}

export const getTypeById = async (req:any) => {
    const type = await Type.findById(req.params.restau_id);
    return type;
}

export const updateType = async (req:any) => {
    const type = await Type.findByIdAndUpdate(req.params.id, req.body);
    type.save();
}

export const deleteType = (req:any) => {
    Type.findByIdAndDelete(req.params.id)
};