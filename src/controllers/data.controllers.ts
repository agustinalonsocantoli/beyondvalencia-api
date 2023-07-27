import { NextFunction, Response, Request } from "express";
import { DataInt } from "../interfaces/DataInt";
import Data from "../models/data.models";

const dataController = {
    getAllData: async (_req: Request, res: Response, next: NextFunction) => {
        
        try {
            
            const data = await Data.find()
            .exec()
            .catch((e) => next(e));

            res.json({
                message: "Data obtained successfully", 
                data: data
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getData: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const data = await Data.findOne({slug: req.params.slug})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Data obtained successfully",
                data: data
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    newData: async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const newData: DataInt = {
                slug: req.body.slug,
                h1: req.body.h1,
                h2: req.body.h1,
                navigate: req.body.navigate,
                content: req.body.content,
            }
    
            await Data.create(newData)
            .catch((e) => next(e));
    
            res.json({
                message: "Data created successfully",
                data: newData
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updateData: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editData: DataInt = {
                slug: req.body.slug,
                h1: req.body.h1,
                h2: req.body.h1,
                navigate: req.body.navigate,
                content: req.body.content,
            }

            await Data.findOneAndUpdate({slug: req.params.slug}, editData)
            .catch((e) => next(e));

            res.json({
                message: `Data update successfully`,
                data: editData
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    deleteData: async (req: Request, res: Response, next: NextFunction) => {

        try {
            await Data.findOneAndDelete({slug: req.params.slug})
            .exec()
            .catch((e) => next(e));

            res.json({
                message: `Data deleted successfully`,
                data: req.params.slug
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

export default dataController;