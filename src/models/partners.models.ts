import { model, Schema } from "mongoose";

const partnersSchema = new Schema({
    name: String,
    contact: String,
    email: String,
    phone: String,
    type: String,
},
{
    timestamps: true,
    versionKey: false
});

const Partners = model('Partners', partnersSchema);

export default Partners;