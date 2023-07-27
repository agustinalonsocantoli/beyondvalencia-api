import { model, Schema } from "mongoose";

const codesSchema = new Schema({
    code: String,
    discount: Number
},
{
    timestamps: true,
    versionKey: false
});

const Codes = model('Codes', codesSchema);

export default Codes;