import Joi from 'joi';

// Define the validation schema
const highlightsSchema = Joi.object({
    title: Joi.string().required(),
    speaker: Joi.string().required(),
    picture: Joi.string().uri().required(),
});

// Validate the highlights object
export const validateHighlights = (formData: FormData) => {
    return highlightsSchema.validate(formData);
};