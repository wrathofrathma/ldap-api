import { NextFunction, Request, Response } from "express";
import { AuthService } from "../../services/AuthService";

/**
 * Controller to handle any authentication requests.
 */
export const AuthController = {
	/**
	 * Handles the POST request on /api/v1/auth
	 * 
	 * @param req {Request} Express request object
	 * @param res {Response} Express response object
	 * @param next {NextFunction} Express NextFunction (used for middleware)
	 */
	async login(req: Request, res: Response, next: NextFunction) {
		const { uid, password } = req.body;

		try {
			// Attempt to login
			const token = await AuthService.login(uid, password);

			res.send(token);
		} 
		catch (e) {
			return next(e);
		}

		return next();
	} 
}