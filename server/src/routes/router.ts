import express, { Router } from "express";
import CitiesRouter from "./cities";

const router: Router = express.Router();

CitiesRouter(router);

export default router;
