import { modelData } from "../../../modelsdata";

export function getModelData () {
    return modelData;
}

export default function handler(req, res) {
    res.status(200).json(modelData)
}