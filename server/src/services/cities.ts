import { ICitySchema } from "../../interfaces";
import { City } from "../db/models/City";
import { List } from "../db/models/List";

export const getCitiesService = async () => {
	return await City.find();
};

export const getCitiesListsService = async () => {
	return await List.find().populate("cities");
};

export const getCitiesByListIdService = async (id: string) => {
	return await List.findOne({ _id: id }).populate("cities");
};

export const createCityService = async (body: ICitySchema) => {
	const list = await List.findOne({ listName: body.listName }).populate(
		"cities"
	);

	const newCity = await City.create(body);

	if (newCity && !list) {
		const randomColor =
			"#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");

		await List.create({
			listName: body.listName,
			code: body.code,
			cities: [newCity],
			color: randomColor,
		});
	}

	if (newCity && list) {
		await List.updateOne(
			{ _id: list._id },
			{ cities: [...list.cities, newCity] }
		);
	}
};

export const editCityService = async (id: string, body: ICitySchema) => {
	await City.updateOne({ _id: id }, body);
};

export const deleteCityService = async (id: string) => {
	const city = await City.findById({ _id: id });

	if (!city) {
		throw new Error("Город не найден");
	}

	const list = await List.findOne({ listName: city.listName }).populate(
		"cities"
	);

	if (!list) {
		throw new Error("Список не найден");
	}

	const deletedCity = await City.deleteOne({ _id: id });

	if (deletedCity) {
		await List.updateOne(
			{ _id: list._id },
			{
				cities: list.cities.filter((x: ICitySchema) => x._id !== id),
			}
		);
	}
};
