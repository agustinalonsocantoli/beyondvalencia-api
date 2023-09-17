import Rol from "../models/rol.models";

export const createRoles = async () => {
    try{
        const count = await Rol.estimatedDocumentCount();

        if (count > 0) return;
    
        await Promise.all([
            new Rol({name: 'partner'}).save(),
            new Rol({name: 'admin'}).save()
        ])
    } catch(error) {
        console.error(error);
    }
};