import { Router } from "express";
import { constructRouteErrorWrapper } from "../utils/shortcuts";
import {
	getCities,
	createСity,
	editCity,
	deleteCity,
	getCitiesLists,
	getCitiesByListId,
} from "../controllers/cities";

export default function CitiesRouter(router: Router) {
	router.get("/cities/pool", constructRouteErrorWrapper(getCities));

	router.get("/cities/lists", constructRouteErrorWrapper(getCitiesLists));

	router.get(
		"/cities/lists/:id",
		constructRouteErrorWrapper(getCitiesByListId)
	);

	router.post("/cities", constructRouteErrorWrapper(createСity));

	router.put("/cities/:id", constructRouteErrorWrapper(editCity));

	router.delete("/cities/:id", constructRouteErrorWrapper(deleteCity));
}
