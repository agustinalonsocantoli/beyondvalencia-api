import { NextFunction, Response, Request } from "express";
import Experiences from "../models/experiences.models";
import { ExperiencesInt } from "../interfaces/ExperiencesInt";
import { transformToSlug } from "../functions/transformToSlug";

const experiencesController = {
    getAllExperiences: async (_req: Request, res: Response, next: NextFunction) => {
        
        try {
            
            const experiences = await Experiences.find()
            .exec()
            .catch((e) => next(e));

            res.json({
                message: "Experiences obtained successfully", 
                data: experiences
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getExperienceBySlug: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const experiences = await Experiences.findOne({slug: req.params.slug})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Experience obtained successfully",
                data: experiences
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getExperienceById: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const experiences = await Experiences.findOne({_id: req.params.id})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Experience obtained successfully",
                data: experiences
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    newExperience: async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const newExperience: ExperiencesInt = {
                slug: transformToSlug(req.body.title),
                title: req.body.title,
                subtitle: req.body.subtitle,
                headline: req.body.headline,
                description: req.body.description,
                information: req.body.information,
                multimedia: req.body.multimedia,
                highlights: req.body.highlights,
                details: req.body.details,
                included: req.body.included,
                takeWithYou: req.body.takeWithYou,
                groups: req.body.groups,
                policies: req.body.policies,
                conditions: req.body.conditions,
                published: req.body.published,
            }
    
            await Experiences.create(newExperience)
            .catch((e) => next(e));
    
            res.json({
                message: "Experience created successfully",
                data: newExperience
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updateExperience: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editExperience: ExperiencesInt = {
                slug: transformToSlug(req.body.title),
                title: req.body.title,
                subtitle: req.body.subtitle,
                headline: req.body.headline,
                description: req.body.description,
                information: req.body.information,
                multimedia: req.body.multimedia,
                highlights: req.body.highlights,
                details: req.body.details,
                included: req.body.included,
                takeWithYou: req.body.takeWithYou,
                groups: req.body.groups,
                policies: req.body.policies,
                conditions: req.body.conditions,
                published: req.body.published,
            }

            await Experiences.findOneAndUpdate({_id: req.params.id}, editExperience)
            .catch((e) => next(e));

            res.json({
                message: `Experience update successfully`,
                data: editExperience
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    deleteExperience: async (req: Request, res: Response, next: NextFunction) => {

        try {
            await Experiences.findOneAndDelete({_id: req.params.id})
            .exec()
            .catch((e) => next(e));

            res.json({
                message: `Experience deleted successfully`,
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

export default experiencesController;