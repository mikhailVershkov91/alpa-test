require("dotenv").config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { createConnection } from "./src/db";
import router from "./src/routes/router";

const port = process.env.PORT || 8080;
const baseUrl = "/api";
const app = express();

(async () => {
	await createConnection();

	app.use(express.json());
	app.use(bodyParser.json({ limit: "30mb" }));
	app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
	app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
	app.use(
		morgan(function (tokens, req, res) {
			return [
				tokens.date(req, res, "iso"),
				tokens.method(req, res),
				tokens.url(req, res),
				tokens.status(req, res),
				tokens.res(req, res, "content-length"),
				"-",
				tokens["response-time"](req, res),
				"ms",
			].join(" ");
		})
	);
	app.use(baseUrl, router);

	app.listen(port, async () => {
		console.info(`Server is running on http://localhost:${port}`);
	});
})();
