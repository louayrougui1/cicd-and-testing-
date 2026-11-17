import { Router } from "express";

import * as taskController from "../controllers/task.controller.js";

const router = Router();

router.post("/", taskController.create);
router.get("/", taskController.getAll);
router.get("/:id", taskController.getOne);
router.delete("/:id", taskController.remove);

export default router;
