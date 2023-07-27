import { model, Schema } from "mongoose";

const usersSchema = new Schema({
    username: { type: String, unique: true},
    email: { type: String, require: true, unique: true},
    password: { type: String, require: true},
    firstName: String,
    lastName: String,
},
{
    timestamps: true,
    versionKey: false
});

const Users = model('Users', usersSchema);

export default Users;