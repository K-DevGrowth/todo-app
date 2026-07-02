import Todo from "../models/todo.model.js";

export const getTodos = async (req, res, next) => {
  const todos = await Todo.find().sort({ order: 1 });

  res.status(200).json({
    success: true,
    data: todos,
  });
};

export const getTodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    const error = new Error("Todo not found");
    error.status = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    data: todo,
  });
};

export const createTodo = async (req, res, next) => {
  const { name } = req.body;

  try {
    const lastTodo = await Todo.findOne().sort({ order: -1 });
    const newOrder = lastTodo ? lastTodo.order + 1 : 0;

    const todo = await Todo.create({ name, completed: false, order: newOrder });

    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data: todo,
    });
  } catch (error) {
    console.log("error:", error.message);
    next(error);
  }
};

export const updatedTodo = async (req, res, next) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: todo,
  });
};

export const deleteTodo = async (req, res, next) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    throw new Error("Todo not found");
  }

  res.status(204).end();
};

export const deleteTodos = async (req, res, next) => {
  const todos = await Todo.deleteMany({ completed: true });
  res.status(204).end();
};
