import { Schema, model } from "mongoose";
import { IListSchema } from "../../../interfaces";

const listSchema = new Schema<IListSchema>(
	{
		listName: { type: "String", required: true },
		cities: [{ type: Schema.Types.ObjectId, ref: "City" }],
		code: { type: "String", required: true },
		color: { type: "String" },
		created: { type: "Date", required: true, default: Date.now },
	},
	{ collection: "lists" }
);

export const List = model<IListSchema>("List", listSchema);
