import { Router } from "express";
import { CreateAdmin } from "../controllers/admin.controller.js";

const router = Router();
router.route("/createadmin").post(CreateAdmin);

export default router;
