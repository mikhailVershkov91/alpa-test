import { Schema, model } from "mongoose";
import { ICitySchema } from "../../../interfaces";

const citySchema = new Schema<ICitySchema>(
	{
		cityName: { type: "String", required: true },
		wasBuild: { type: "String", required: true },
		listName: { type: "String", required: true },
		code: { type: "String", required: true },
		created: { type: "Date", required: true, default: Date.now },
	},
	{ collection: "cities" }
);

export const City = model<ICitySchema>("City", citySchema);
