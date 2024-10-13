import Joi from "joi";
import { ROLES } from "../src/util/helper";

// Login validation schema
export const userLoginValidator = Joi.object({
  email: Joi.string().trim().email({ minDomainSegments: 2 }),
  password: Joi.string()
    .required()
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]*$/)
    .message(
      "Password must be at least 6 characters and contain at least one uppercase letter, one digit, and one special character"
    ),
});

// Register validation schema
export const userRegisterValidator = Joi.object({
  name: Joi.string().trim().required().min(6),

  email: Joi.string().trim().email({ minDomainSegments: 2 }),
  password: Joi.string()
    .required()
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]*$/)
    .message(
      "Password must be at least 6 characters and contain at least one uppercase letter, one digit, and one special character"
    ),
  role: Joi.string()
    .valid(
      ...Object.values(ROLES).filter(
        (role) => !Object.values(ROLES).includes(role)
      )
    )
    .required(),
});
