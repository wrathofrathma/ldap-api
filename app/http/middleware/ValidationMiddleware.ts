import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import UnprocessableEntityException from "../../exceptions/UnprocessableEntityException";

/**
 * Validation middleware that takes in a schema object for the given route.
 * 
 * @param {AnyZodObject} schema The schema used by the validator.
 * 
 * @throws UnprocessableEntityException
 */
const validate = (schema: AnyZodObject) => 
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.parseAsync({
				body: req.body,
				query: req.query,
				params: req.params
			});

			return next();
		}
		catch (e) {
			return next(new UnprocessableEntityException(String(e)));
		}
	}

export default validate;