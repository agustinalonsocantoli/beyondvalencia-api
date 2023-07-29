import { model, Schema } from "mongoose";

const bikesSchema = new Schema({
    title: String,
    type: String,
    description: String,
    select: String || Array<String>,
    price: {
        small: Number,
        medium: Number,
        normal: Number,
    }
},
{
    timestamps: true,
    versionKey: false
});

const Bikes = model('Bikes', bikesSchema);

export default Bikes;