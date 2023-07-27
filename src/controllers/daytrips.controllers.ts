import { NextFunction, Response, Request } from "express";
import Daytrips from "../models/daytrips.models";
import { DaystripsInt } from "../interfaces/DaytripsInt";

const daytripsController = {
    getAllDaytrips: async (_req: Request, res: Response, next: NextFunction) => {
        
        try {
            
            const daytrips = await Daytrips.find()
            .exec()
            .catch((e) => next(e));

            res.json({
                message: "Day Trips obtained successfully", 
                data: daytrips
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getDaytrip: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const daytrips = await Daytrips.findOne({slug: req.params.slug})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Day Trip obtained successfully",
                data: daytrips
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    newDaytrip: async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const newDaytrip: DaystripsInt = {
                slug: req.body.slug,
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
    
            await Daytrips.create(newDaytrip)
            .catch((e) => next(e));
    
            res.json({
                message: "Day Trip created successfully",
                data: newDaytrip
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updateDaytrip: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editDaytrip: DaystripsInt = {
                slug: req.body.slug,
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

            await Daytrips.findOneAndUpdate({slug: req.params.slug}, editDaytrip)
            .catch((e) => next(e));

            res.json({
                message: `Day Trip update successfully`,
                data: editDaytrip
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    deleteDaytrip: async (req: Request, res: Response, next: NextFunction) => {

        try {
            await Daytrips.findOneAndDelete({slug: req.params.slug})
            .exec()
            .catch((e) => next(e));

            res.json({
                message: `Day Trip deleted successfully`,
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

export default daytripsController;