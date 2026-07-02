import express from "express";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/db.js";
import todoRouter from "./routes/todo.routes.js";

const app = express();

app.use(express.static('dist'));
app.use(express.json());

app.use("/api/v1/todos", todoRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on the http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;
