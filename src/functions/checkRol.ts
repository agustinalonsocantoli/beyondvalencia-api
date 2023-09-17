import { UsersRols } from "../models/rol.models";

export const checkRolExisted = (req: any, res: any, next: any) => {
    if(req.body.rol) {
        for(let i = 0; i > req.body.rol.length; i++) {
            if(!UsersRols.includes(req.body.rol[i])) {
                return res.json({ message: "Rol does not exists", data: req.body.rol[i] })
            }
        }
    }

    next();
};