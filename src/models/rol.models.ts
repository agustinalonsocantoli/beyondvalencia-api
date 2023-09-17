import { model, Schema } from "mongoose";

export const UsersRols = [
    "admin",
    "partner",
]

const rolSchema = new Schema({
    name: String,
},
{
    versionKey: false
});

const Rol = model('Rol', rolSchema);
export default Rol