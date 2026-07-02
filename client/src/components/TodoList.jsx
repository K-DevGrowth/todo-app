import { useRef, useState } from "react";

const TodoList = ({
  todos,
  onDelete,
  onTogglableCompleted,
  onCompletedDelete,
  onReorderTodoMutation,
  darkMode,
}) => {
  const [filter, setFilter] = useState("All");
  const dragIndex = useRef();

  const filteredList = todos.data.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const handleDragStart = (todo) => {
    dragIndex.current = todo;
  };

  const handleDrop = (dropTodo, dropIndex) => {
    const list = filteredList;
    const draggedTodo = dragIndex.current;

    if (draggedTodo._id === dropTodo._id) return;

    // Biết hướng kéo
    const draggedIndex = list.findIndex((t) => t._id === draggedTodo._id);
    const draggingDown = draggedIndex < dropIndex;

    let prevOrder, nextOrder;

    if (draggingDown) {
      // Kéo xuống: item thả vào trở thành prev, item sau nó là next
      prevOrder = list[dropIndex].order;
      nextOrder =
        dropIndex < list.length - 1 ? list[dropIndex + 1].order : null;
    } else {
      // Kéo lên: item trước vị trí thả là prev, item thả vào là next
      prevOrder = dropIndex > 0 ? list[dropIndex - 1].order : null;
      nextOrder = list[dropIndex].order;
    }

    let newOrder;
    if (prevOrder === null) {
      newOrder = nextOrder - 1;
    } else if (nextOrder === null) {
      newOrder = prevOrder + 1;
    } else {
      newOrder = (prevOrder + nextOrder) / 2;
    }

    onReorderTodoMutation(draggedTodo._id, newOrder);
  };

  const handleClearCompleted = () => {
    onCompletedDelete();
  };

  return (
    <div className="w-full max-w-100 mt-4 shadow-xl">
      <div>
        {filteredList.map((todo, index) => (
          <div
            onDragStart={() => handleDragStart(todo)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(todo, index)}
            draggable={true}
            key={todo._id}
            className={`flex justify-between items-center border-b border-Gray-300 px-4 py-3 ${darkMode ? "bg-Navy-900 text-white" : "bg-white"}`}
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
      <div
        className={`text-[12px] text-Gray-600 font-medium flex justify-between items-center py-2 px-3 ${darkMode ? "bg-Navy-900" : "bg-white"}`}
      >
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
