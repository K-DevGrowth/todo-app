import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
  },
});

const Todo = mongoose.model("Todos", todoSchema);

export default Todo;
