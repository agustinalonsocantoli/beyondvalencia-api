import { NextFunction, Response, Request } from "express";
import { ContentInt } from "../interfaces/ContentInt";
import Content from "../models/content.models";

const contentController = {
    getAllContent: async (req: Request, res: Response, next: NextFunction) => {
        
        try {
            const query = req.query;
            let content;

            if(query.hasOwnProperty("landing")) {
                content = await Content.find(query)
                .exec()
                .catch((e) => next(e));
            } else {
                content = await Content.find()
                .exec()
                .catch((e) => next(e));
            }
            
            res.json({
                message: "Content obtained successfully", 
                data: content
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getContent: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const content = await Content.findOne({_id: req.params.id})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Content obtained successfully",
                data: content
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updateContent: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editContent: ContentInt = {
                landing: req.body.landing,
                link: req.body.link,
                img: req.body.img,
                imgW: req.body.imgW,
                type: req.body.type,
                h3: req.body.h3,
                p: req.body.p,
                span: req.body.span,
            }

            await Content.findOneAndUpdate({_id: req.params.id}, editContent)
            .catch((e) => next(e));

            res.json({
                message: `Content update successfully`,
                data: editContent
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
}

export default contentController;