import { model, Schema } from "mongoose";

const lockersSchema = new Schema({
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

const Lockers = model('Lockers', lockersSchema);

export default Lockers;