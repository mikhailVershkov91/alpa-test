import { Request, Response } from "express";

export const constructRouteErrorWrapper = (
	fn: (req: Request, res: Response) => Promise<any>
) => {
	return async (req: Request, res: Response) => {
		try {
			await fn(req, res);
		} catch (error) {
			console.error(fn.name, req.url, req.body, error);
			return res.sendStatus(500);
		}
	};
};
