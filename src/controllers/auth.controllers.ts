import Users from "../models/users.models";
import { encryptPassword, validatePassword } from '../functions/hashUser';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

const HASH_TOKEN = process.env.SECRET_KEY ? process.env.SECRET_KEY : "BEYOND-VALENCIA-TOKEN"

const authController = {

    signup: async (req: any, res: any, next: any) => {

        try{

            const newUser = {
                username: req.body.username,
                email: req.body.email,
                password: encryptPassword(req.body.password),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            }

            const user = await Users.create(newUser)
            .catch((e) => next(e));

            const token = jwt.sign({id: user._id}, HASH_TOKEN, {expiresIn: 432000})

            res.json({
                message: "User created successfully",
                data: user,
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
    },

    login: async (req: any, res: any, next: any) => {

        try {
            const foundUser: any = await Users.findOne({username: req.body.username})

            if(!foundUser) return res.json({ message: "No User found", data: req.body.username });
            
            const comparePassword = validatePassword(req.body.password, foundUser.password);

            if(!comparePassword) return res.json({ message: "Invalid password", data: null });

            const token = jwt.sign({id: foundUser._id, }, HASH_TOKEN, {expiresIn: 432000});

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