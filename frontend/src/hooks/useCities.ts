import { useQuery } from "@tanstack/react-query";
import { getListCities, getLists, getPoolCities } from "../actions/cities";
import { useMemo } from "react";

export const usePoolCities = () => {
	const rqPoolKey = useMemo(() => `/cities/pool`, []);

	const { isLoading, data } = useQuery({
		queryKey: [rqPoolKey],
		queryFn: getPoolCities,
	});

	return {
		isLoading,
		data,
		rqPoolKey,
	};
};

export const useCitiesLists = () => {
	const rqListsKey = useMemo(() => `/cities/lists`, []);

	const { isLoading, data } = useQuery({
		queryKey: [rqListsKey],
		queryFn: getLists,
	});

	return {
		isLoading,
		data,
		rqListsKey,
	};
};

export const useCitiesList = (id: string) => {
	const rqListKey = useMemo(() => `/cities/lists/${id}`, [id]);

	const { isLoading, data } = useQuery({
		queryKey: [rqListKey],
		queryFn: () => getListCities(id),
	});

	return {
		isLoading,
		data,
		rqListKey,
	};
};
