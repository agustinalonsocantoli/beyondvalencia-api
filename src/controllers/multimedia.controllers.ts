import { NextFunction, Response, Request } from "express";
import Multimedia from "../models/multimedia.models";
import { MultimediaInt } from "../interfaces/MultimediaInt";

const multimediaController = {
    getAllMultimedia: async (_req: Request, res: Response, next: NextFunction) => {
        
        try {
            
            const multimedia = await Multimedia.find()
            .exec()
            .catch((e) => next(e));

            res.json({
                message: "Multimedia obtained successfully", 
                data: multimedia
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getMultimedia: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const multimedia = await Multimedia.findOne({slug: req.params.slug})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Multimedia obtained successfully",
                data: multimedia
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    newMultimedia: async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const newMultimedia: MultimediaInt = {
                slug: req.body.slug,
                navigate: req.body.body,
                src: req.body.src,
                h3: req.body.h3,
                p: req.body.p,
                span: req.body.span,
                type: req.body.type
            }
    
            await Multimedia.create(newMultimedia)
            .catch((e) => next(e));
    
            res.json({
                message: "Multimedia created successfully",
                data: newMultimedia
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updateMultimedia: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editMultimedia: MultimediaInt = {
                slug: req.body.slug,
                navigate: req.body.body,
                src: req.body.src,
                h3: req.body.h3,
                p: req.body.p,
                span: req.body.span,
                type: req.body.type
            }

            await Multimedia.findOneAndUpdate({slug: req.params.slug}, editMultimedia)
            .catch((e) => next(e));

            res.json({
                message: `Multimedia update successfully`,
                data: editMultimedia
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    deleteMultimedia: async (req: Request, res: Response, next: NextFunction) => {

        try {
            await Multimedia.findOneAndDelete({slug: req.params.slug})
            .exec()
            .catch((e) => next(e));

            res.json({
                message: `Multimedia deleted successfully`,
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

export default multimediaController;