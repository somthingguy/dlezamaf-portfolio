import { modelData } from "../../../modelsdata";

export function getModelData (id) {
    return modelData.filter((model) => model.id === id);
} 
    

export default function handler({ query: { id } }, res) {
    const filtered = modelData.filter(model => model.id === id)

    if(filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(400).json({message: `Item with the id of ${id} is not found`})
    }
}