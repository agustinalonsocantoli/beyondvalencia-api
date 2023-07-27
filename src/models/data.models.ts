import { model, Schema } from "mongoose";

const dataSchema = new Schema({
    slug: {type: String, require: true, unique: true},
    h1: String,
    h2: String,
    navigate: {type: String, unique: true},
    content: Array<{
        link: String,
        img: String,
        imgW: String,
        type: String,
        h3: String,
        p: String,
        span: String,
    }>
},
{
    timestamps: true,
    versionKey: false
});

const Data = model('Data', dataSchema);

export default Data;