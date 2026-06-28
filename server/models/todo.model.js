import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean || false,
});

const Todo = mongoose.model('Todos', todoSchema);

export default Todo;
