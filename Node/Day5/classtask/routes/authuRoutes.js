import express from "express";
import {addData, getDate} from "../controllers/authControllers.js";

const router =express.Router();

router.post("/useradding", addData)
router.get("/userdate", getDate)

export default router;