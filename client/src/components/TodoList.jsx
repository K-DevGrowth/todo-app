const TodoList = ({ todos, onDelete, onTogglableCompleted }) => {
  return (
    <div className="w-full max-w-100 mt-4 shadow-xl">
      <div>
        {todos.data.map((todo) => (
          <div
            key={todo._id}
            className="flex justify-between items-center border-b border-Gray-300 px-4 py-3 bg-white"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onTogglableCompleted(todo._id, todo.completed)}
              />
              <p
                className={`${todo.completed ? "line-through text-Gray-300 " : ""}`}
              >
                {todo.name}
              </p>
            </div>
            <button type="button" onClick={() => onDelete(todo._id)}>
              <img src="./images/icon-cross.svg" alt="" />
            </button>
          </div>
        ))}
      </div>
      <div className="text-[12px] text-Gray-600 bg-white font-medium flex justify-between items-center py-2 px-3">
        <p>
          {todos.data.filter((t) => t.completed === false).length} items left
        </p>
        <div className="*:px-1">
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
