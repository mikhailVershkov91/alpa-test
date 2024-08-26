import axios from "axios";
import { ICity } from "../interfaces";

export function getHeaders(optionalHeaders = {}) {
	return {
		baseURL: "http://localhost:5000/api",
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
			...optionalHeaders,
		},
	};
}

export const getPoolCities = async () => {
	try {
		const res = await axios.get("/cities/pool", getHeaders());

		return res.data.data;
	} catch (error) {
		console.error(error);
	}
};

export const getLists = async () => {
	try {
		const res = await axios.get("/cities/lists", getHeaders());

		return res.data.data;
	} catch (error) {
		console.error(error);
	}
};

export const getListCities = async (id: string) => {
	try {
		const res = await axios.get(`/cities/lists/${id}`, getHeaders());

		return res.data.data;
	} catch (error) {
		console.error(error);
	}
};

export const createCity = async (body: ICity) => {
	try {
		const res = await axios.post("/cities", body, getHeaders());

		return res.data.data;
	} catch (error) {
		console.error(error);
	}
};

export const editCity = async (body: ICity) => {
	try {
		const res = await axios.put(`/cities/${body._id}`, body, getHeaders());

		return res.data.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteCity = async (id: string) => {
	try {
		const res = await axios.delete(`/cities/${id}`, getHeaders());

		return res.data.data;
	} catch (error) {
		console.error(error);
	}
};
