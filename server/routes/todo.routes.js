import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updatedTodo,
} from "../controllers/todo.controller.js";

const todoRouter = Router();

todoRouter.get("/", getTodos);
todoRouter.get("/:id", getTodo);
todoRouter.post("/", createTodo);
todoRouter.put("/:id", updatedTodo);
todoRouter.delete("/:id", deleteTodo);

export default todoRouter;
