import { model, Schema } from "mongoose";

const codesSchema = new Schema({
    code: {type: String, unique: true, require: true},
    discount: {type: Number, require: true},
    state: Boolean,
    partner: Object,
},
{
    timestamps: true,
    versionKey: false
});

const Codes = model('Codes', codesSchema);

export default Codes;