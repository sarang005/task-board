import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

import { auth, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/", auth, isAdmin, createTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, isAdmin, deleteTask);

export default router;
