import express from "express";

import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.get("/", getTasks);
taskRouter.get("/:taskId", getTaskById);
taskRouter.post("/", createTask);
taskRouter.put("/:taskId", updateTask);
taskRouter.delete("/:taskId", deleteTask);

export default taskRouter;