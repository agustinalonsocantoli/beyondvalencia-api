import { NextFunction, Response, Request } from "express";
import Multimedia from "../models/multimedia.models";
import { MultimediaInt } from "../interfaces/MultimediaInt";

const multimediaController = {
    getAllMultimedia: async (req: Request, res: Response, next: NextFunction) => {
        
        try {
            const query = req.query;
            let multimedia;

            if(query.hasOwnProperty("landing")) {
                multimedia = await Multimedia.find(query)
                .exec()
                .catch((e) => next(e));
            } else {
                multimedia = await Multimedia.find()
                .exec()
                .catch((e) => next(e));
            }
            
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

            const multimedia = await Multimedia.findOne({_id: req.params.id})
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
    updateMultimedia: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editMultimedia: MultimediaInt = {
                landing: req.body.landing,
                navigate: req.body.navigate,
                src: req.body.src,
                h3: req.body.h3,
                p: req.body.p,
                span: req.body.span,
                type: req.body.type
            }

            await Multimedia.findOneAndUpdate({_id: req.params.id}, editMultimedia)
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
}

export default multimediaController;