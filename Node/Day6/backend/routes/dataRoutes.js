import express from "express";
import {getData, createData} from "../controllers/dataController.js";
const routes =express.Routes();

routes.get("/",getData);

routes.post("/",createData);

export default routes;

