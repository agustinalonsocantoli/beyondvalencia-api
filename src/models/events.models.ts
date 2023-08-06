import { model, Schema } from "mongoose";

const eventsSchema = new Schema({
    slug: { type: String, require: true, unique: true},
    title: String,
    subtitle: {
        label: String,
        text: String,
    },
    headline: String,
    description: String,
    information: String,
    multimedia: Array<{
        src: String,
        type: String,
    }>,
    highlights: Array<String>,
    details: {
        age: String,
        duration: String,
        ticket: String,
        meetengPoint: {
            link: String,
            label: String,
        },
        language: String,
        accessibility: String,
        mobility: String,
        availably: String,
    },
    included:
        Array<{
            text: String,
            state: Boolean,
        }>,
    takeWithYou: Array<String>,
    groups: Array<{
        title: String,
        type: String,
        prices: {
            adults: Number,
            children: Number,
        },
        deapertureTime: Array<String>,
    }>,
    policies: String,
    conditions: String,
    published: Boolean,
    eventDate: Date,
},
{
    timestamps: true,
    versionKey: false
});

const Events = model('Events', eventsSchema);

export default Events;