import { model, Schema } from "mongoose";

const contentSchema = new Schema({
    landing: { type: String, require: true },
    link: String,
    img: String,
    imgW: String,
    type: String,
    h3: String,
    p: String,
    span: String,
},
    {
        timestamps: true,
        versionKey: false
    });

const Content = model('Content', contentSchema);

export default Content;