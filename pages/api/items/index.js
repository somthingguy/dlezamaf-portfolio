import { modelData } from "../../../modelsdata";

export default function handler(req, res) {
    res.status(200).json(modelData)
}