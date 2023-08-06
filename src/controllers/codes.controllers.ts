import { NextFunction, Response, Request } from "express";
import Codes from "../models/codes.models";
import { CodesInt } from "../interfaces/CodesInt";

const codesController = {
    getAllCodes: async (_req: Request, res: Response, next: NextFunction) => {
        
        try {
            
            const codes = await Codes.find()
            .exec()
            .catch((e) => next(e));

            res.json({
                message: "Codes obtained successfully", 
                data: codes
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getCode: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const codes = await Codes.findOne({_id: req.params.id})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Code obtained successfully",
                data: codes
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    newCode: async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const newCode: CodesInt = {
                code: req.body.code,
                discount: req.body.discount,
                state: req.body.state,
                partner: req.body.partner
            }
    
            await Codes.create(newCode)
            .catch((e) => next(e));
    
            res.json({
                message: "Code created successfully",
                data: newCode
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updateCode: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editCode: CodesInt = {
                code: req.body.code,
                discount: req.body.discount,
                state: req.body.state,
                partner: req.body.partner
            }

            await Codes.findOneAndUpdate({_id: req.params.id}, editCode)
            .catch((e) => next(e));

            res.json({
                message: `Code update successfully`,
                data: editCode
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    deleteCode: async (req: Request, res: Response, next: NextFunction) => {

        try {
            await Codes.findOneAndDelete({_id: req.params.id})
            .exec()
            .catch((e) => next(e));

            res.json({
                message: `Code deleted successfully`,
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

export default codesController;