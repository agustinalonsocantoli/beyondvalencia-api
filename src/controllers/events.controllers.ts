import { NextFunction, Response, Request } from "express";
import Events from "../models/events.models";
import { EventsInt } from "../interfaces/EventsInt";

const eventsController = {
    getAllEvents: async (_req: Request, res: Response, next: NextFunction) => {
        
        try {
            
            const events = await Events.find()
            .exec()
            .catch((e) => next(e));

            res.json({
                message: "Events obtained successfully", 
                data: events
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    getEvent: async (req: Request, res: Response, next: NextFunction) => {
        
        try {    

            const events = await Events.findOne({slug: req.params.slug})
            .exec()
            .catch((e) => next(e));
    
            res.json({
                message: "Event obtained successfully",
                data: events
            });

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    newEvent: async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const newEvent: EventsInt = {
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
                eventDate: req.body.eventDate
            }
    
            await Events.create(newEvent)
            .catch((e) => next(e));
    
            res.json({
                message: "Event created successfully",
                data: newEvent
            })

        } catch(error) {
            next(error);
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    updateEvent: async (req: Request, res: Response, next: NextFunction) => {

        try {

            const editEvent: EventsInt = {
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
                eventDate: req.body.eventDate
            }

            await Events.findOneAndUpdate({slug: req.params.slug}, editEvent)
            .catch((e) => next(e));

            res.json({
                message: `Event update successfully`,
                data: editEvent
            })
        
        } catch(error) {
            res.json({
                messages: 'Error en el Servidor',
                error: error
            });
        }
    },
    deleteEvent: async (req: Request, res: Response, next: NextFunction) => {

        try {
            await Events.findOneAndDelete({slug: req.params.slug})
            .exec()
            .catch((e) => next(e));

            res.json({
                message: `Events deleted successfully`,
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

export default eventsController;