import Joi from "joi";
import { ROLES,TEAM } from "../src/util/helper";

export const leadValidator = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    bio: Joi.string().required(),
    tagline: Joi.string().required(),
    facebook: Joi.string().required(),
    instagram: Joi.string().required(),
    linkedin: Joi.string().required(),
    picture: Joi.any().required(),
});

export function validationLeads(body: FormData): void {

    // Validate fields against schema
   const { error } = leadValidator.validate(Object.fromEntries(body.entries()));
   if (error) {
       throw new Error(error.details[0].message);
   }
}


export const teamValidator = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid(...Object.values(ROLES)).optional(),
    team: Joi.string().valid(...Object.values(TEAM)).optional(),
    bio: Joi.string().required(),
    tagline: Joi.string().required(),
    picture: Joi.any().required(),
    facebook: Joi.string().required(),
    instagram: Joi.string().required(),
    linkedin: Joi.string().required(),
})

export const validationTeam = (body: FormData): void => {
    // Validate fields against schema
    const { error } = teamValidator.validate(Object.fromEntries(body.entries()));
    if (error) {
        throw new Error(error.details[0].message);
    }
}
