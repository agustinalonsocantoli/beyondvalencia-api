import { NextFunction, Response, Request } from "express";
import { ProductInt } from "../interfaces/ProductInt";
import Lockers from "../models/lockers.models";

const lockersController = {
    getAllLockers: async (_req: Request, res: Response, next: NextFunction) => {
        
        try {
            
            const lockers = await Lockers.find()
            .exec()
            .catch((e) => next(e));

            res.json({
                message: "Lockers obtained successfully", 
                data: lockers
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getLocker: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const lockers = await Lockers.findOne({_id: req.params.id})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Locker obtained successfully",
                data: lockers
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    newLocker: async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const newlocker: ProductInt = {
                title: req.body.title,
                type: req.body.type,
                description: req.body.description,
                select: req.body.select,
                price: req.body.price
            }
    
            await Lockers.create(newlocker)
            .catch((e) => next(e));
    
            res.json({
                message: "Locker created successfully",
                data: newlocker
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updateLocker: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editLocker: ProductInt = {
                title: req.body.title,
                type: req.body.type,
                description: req.body.description,
                select: req.body.select,
                price: req.body.price
            }

            await Lockers.findOneAndUpdate({_id: req.params.id}, editLocker)
            .catch((e) => next(e));

            res.json({
                message: `Locker update successfully`,
                data: editLocker
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    deleteLocker: async (req: Request, res: Response, next: NextFunction) => {

        try {
            await Lockers.findOneAndDelete({_id: req.params.id})
            .exec()
            .catch((e) => next(e));

            res.json({
                message: `Locker deleted successfully`,
                data: req.params.id
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
}

export default lockersController;