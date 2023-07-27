import { model, Schema } from "mongoose";

const multimediaSchema = new Schema({
    slug: {type: String, require: true, unique: true},
    navigate: {type: String, unique: true},
    src: String,
    h3: String,
    p: String,
    span: String,
    type: String,
},
{
    timestamps: true,
    versionKey: false
});

const Multimedia = model('Multimedia', multimediaSchema);

export default Multimedia;