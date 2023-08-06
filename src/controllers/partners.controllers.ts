import { NextFunction, Response, Request } from "express";
import { PartnerInt } from "../interfaces/PartnerInt";
import Partners from "../models/partners.models";

const partnersController = {
    getAllPartners: async (_req: Request, res: Response, next: NextFunction) => {
        
        try {
            
            const partners = await Partners.find()
            .exec()
            .catch((e) => next(e));

            res.json({
                message: "Partners obtained successfully", 
                data: partners
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getPartner: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const partner = await Partners.findOne({_id: req.params.id})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Partner obtained successfully",
                data: partner
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    newPartner: async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const newPartner: PartnerInt = {
                name: req.body.name,
                contact: req.body.contact,
                email: req.body.email,
                phone: req.body.phone,
                type: req.body.type
            }
    
            await Partners.create(newPartner)
            .catch((e) => next(e));
    
            res.json({
                message: "Partner created successfully",
                data: newPartner
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updatePartner: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editPartner: PartnerInt = {
                name: req.body.name,
                contact: req.body.contact,
                email: req.body.email,
                phone: req.body.phone,
                type: req.body.type
            }

            await Partners.findOneAndUpdate({_id: req.params.id}, editPartner)
            .catch((e) => next(e));

            res.json({
                message: `Partner update successfully`,
                data: editPartner
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    deletePartner: async (req: Request, res: Response, next: NextFunction) => {

        try {
            await Partners.findOneAndDelete({_id: req.params.id})
            .exec()
            .catch((e) => next(e));

            res.json({
                message: `Partner deleted successfully`,
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

export default partnersController;