import Users from "../models/users.models";
import { encryptPassword, validatePassword } from '../functions/hashUser';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import Rol from "../models/rol.models";
dotenv.config()

const HASH_TOKEN = process.env.SECRET_KEY ? process.env.SECRET_KEY : "BEYOND-VALENCIA-TOKEN"
const SIGNUP_HASH = process.env.SIGNUP_HASH ? process.env.SIGNUP_HASH : ""

const authController = {

    signup: async (req: any, res: any, next: any) => {

        try{
            const hash = req.headers["signup-hash"];

            const compareHash = validatePassword(hash, SIGNUP_HASH);

            if(!compareHash) return res.status(404).json({ message: "Invalid Signup Hash" });

            const newUser: any = {
                username: req.body.username,
                email: req.body.email,
                password: encryptPassword(req.body.password),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            }

            if(req.body.rol) {
                const foundRol = await Rol.find({name: {$in: req.body.rol}});
                newUser.rol = foundRol.map(rol => rol._id);
            } else {
                const foundRol = await Rol.find({name: 'partner'});
                newUser.rol = foundRol.map(rol => rol._id);
            }

            const user = await Users.create(newUser)
            .catch((e) => next(e));

            const token = jwt.sign({id: user._id}, HASH_TOKEN, {expiresIn: 259200})

            res.status(200).json({
                message: "User created successfully",
                data: user,
                token: token
            })
        }
        catch(error){
            next(error);
            res.status(404).json({
                messages: 'Error en el Servidor',
                error: error
            })
        }
    },

    login: async (req: any, res: any, next: any) => {

        try {
            const foundUser: any = await Users.findOne({username: req.body.username}).populate("rol")

            if(!foundUser) return res.status(404).json({ message: "No User found", data: req.body.username });
            
            const comparePassword = validatePassword(req.body.password, foundUser.password);

            if(!comparePassword) return res.status(404).json({ message: "Invalid password", data: null });

            const token = jwt.sign({id: foundUser._id, }, HASH_TOKEN, {expiresIn: 259200});

            const userLogin = foundUser;
            userLogin.password = 'No access';

            res.json({
                message: "Login successfully",
                data: userLogin,
                token: token
            })
        }
        catch(error){
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            })
        }
    }
}
    
export default authController;