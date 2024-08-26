require("dotenv").config();
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

export const createConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL || "");
	} catch (error) {
		console.error(error);
		throw "Connection to db failed!";
	}
};
