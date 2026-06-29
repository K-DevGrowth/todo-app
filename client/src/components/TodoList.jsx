import { useState } from "react";

const TodoList = ({ todos, onDelete, onTogglableCompleted }) => {
  const [filter, setFilter] = useState("All");

  const filteredList = todos.data.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const handleClearCompleted = () => {
    const completedTodo = todos.data.filter((t) => t.completed === true);
    
    completedTodo.map((todo) => {
      onDelete(todo._id);
    });
  };

  return (
    <div className="w-full max-w-100 mt-4 shadow-xl">
      <div>
        {filteredList.map((todo) => (
          <div
            key={todo._id}
            className="flex justify-between items-center border-b border-Gray-300 px-4 py-3 bg-white"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => onTogglableCompleted(todo._id, todo.completed)}
              />
              <p
                className={`${todo.completed ? "line-through text-Gray-300 " : ""}`}
              >
                {todo.name}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onDelete(todo._id)}
              className="cursor-pointer"
            >
              <img src="./images/icon-cross.svg" alt="" />
            </button>
          </div>
        ))}
      </div>
      <div className="text-[12px] text-Gray-600 bg-white font-medium flex justify-between items-center py-2 px-3">
        <p>
          {todos.data.filter((t) => t.completed === false).length} items left
        </p>
        <div className="*:px-1 *:cursor-pointer">
          {["All", "Active", "Completed"].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setFilter(item)}
              className={`${filter === item ? "text-Blue-500" : "hover:text-Navy-850"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="hover:text-Navy-850"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
