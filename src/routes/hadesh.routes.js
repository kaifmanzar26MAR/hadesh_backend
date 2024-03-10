import { Router } from "express";
import { AddHadesh } from "../controllers/hadesh.controller.js";
const router = Router();
router.route("/addhadesh").post(AddHadesh);

export default router;
