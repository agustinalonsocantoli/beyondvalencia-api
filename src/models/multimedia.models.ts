import { model, Schema } from "mongoose";

const multimediaSchema = new Schema({
    landing: {type: String, require: true},
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