import { NextFunction, Response, Request } from "express";
import Bikes from "../models/bikes.models";
import { ProductInt } from "../interfaces/ProductInt";

const bikesController = {
    getAllBikes: async (_req: Request, res: Response, next: NextFunction) => {
        
        try {
            
            const bikes = await Bikes.find()
            .exec()
            .catch((e) => next(e));

            res.json({
                message: "Bikes obtained successfully", 
                data: bikes
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getBike: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const bikes = await Bikes.findOne({_id: req.params.id})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Bike obtained successfully",
                data: bikes
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    newBike: async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const newBike: ProductInt = {
                title: req.body.title,
                type: req.body.type,
                description: req.body.description,
                select: req.body.select,
                price: req.body.price
            }
    
            await Bikes.create(newBike)
            .catch((e) => next(e));
    
            res.json({
                message: "Bike created successfully",
                data: newBike
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updateBike: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editBike: ProductInt = {
                title: req.body.title,
                type: req.body.type,
                description: req.body.description,
                select: req.body.select,
                price: req.body.price
            }

            await Bikes.findOneAndUpdate({_id: req.params.id}, editBike)
            .catch((e) => next(e));

            res.json({
                message: `Bike update successfully`,
                data: editBike
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    deleteBike: async (req: Request, res: Response, next: NextFunction) => {

        try {
            await Bikes.findOneAndDelete({_id: req.params.id})
            .exec()
            .catch((e) => next(e));

            res.json({
                message: `Bike deleted successfully`,
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

export default bikesController;