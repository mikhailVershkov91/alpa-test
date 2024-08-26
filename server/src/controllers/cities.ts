import { Request, Response } from "express";
import {
	createCityService,
	deleteCityService,
	editCityService,
	getCitiesByListIdService,
	getCitiesListsService,
	getCitiesService,
} from "../services/cities";

export const getCities = async (req: Request, res: Response) => {
	try {
		return res.json({
			success: true,
			message: "Города получены",
			data: await getCitiesService(),
		});
	} catch (error) {
		res.status(500).json({
			message: `Городов не найдено: ${error}`,
		});
	}
};

export const getCitiesLists = async (req: Request, res: Response) => {
	try {
		return res.json({
			success: true,
			message: "Списки получены",
			data: await getCitiesListsService(),
		});
	} catch (error) {
		res.status(500).json({
			message: `Списков не найдено: ${error}`,
		});
	}
};

export const getCitiesByListId = async (req: Request, res: Response) => {
	try {
		return res.json({
			success: true,
			message: "Города получены",
			data: await getCitiesByListIdService(req.params.id),
		});
	} catch (error) {
		res.status(500).json({
			message: `Городов не найдено: ${error}`,
		});
	}
};

export const createСity = async (req: Request, res: Response) => {
	try {
		await createCityService(req.body);

		return res.json({
			success: true,
			message: "Город создан",
		});
	} catch (error) {
		res.status(500).json({
			message: `Город не создан: ${error}`,
		});
	}
};

export const editCity = async (req: Request, res: Response) => {
	try {
		await editCityService(req.params.id, req.body);

		return res.json({
			success: true,
			message: "Город изменён",
		});
	} catch (error) {
		res.status(500).json({
			message: `Город не изменён: ${error}`,
		});
	}
};

export const deleteCity = async (req: Request, res: Response) => {
	try {
		await deleteCityService(req.params.id);

		return res.json({
			success: true,
			message: "Город удалён",
		});
	} catch (error) {
		res.status(500).json({
			message: `Город не удалён: ${error}`,
		});
	}
};
