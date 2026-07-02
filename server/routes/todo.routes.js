import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  deleteTodos,
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
todoRouter.delete("/", deleteTodos);
todoRouter.patch("/:id", updatedTodo);

export default todoRouter;
