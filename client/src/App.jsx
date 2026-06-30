import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const {
    data,
    isPending,
    error,
    addTodo: addTodoToServer,
    deleteTodo: deleteTodoFromServer,
    toggleCompletedTodo,
    deleteCompletedTodos,
    reorderTodoMutation,
  } = useTodos();

  const addTodo = async (e) => {
    e.preventDefault();
    const name = e.target.todos.value;
    e.target.reset();
    addTodoToServer(name);
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <main
      className={`relative h-dvh ${darkMode ? "bg-Navy-950" : "bg-Gray-50"}`}
    >
      {darkMode ? (
        <>
          <img
            className="absolute top-0 max-sm:hidden"
            src="./images/bg-desktop-dark.jpg"
            alt=""
          />
          <img
            className="absolute top-0 sm:hidden"
            src="./images/bg-mobile-dark.jpg"
            alt=""
          />
        </>
      ) : (
        <>
          <img
            className="absolute top-0 max-sm:hidden"
            src="./images/bg-desktop-light.jpg"
            alt=""
          />
          <img
            className="absolute top-0 sm:hidden"
            src="./images/bg-mobile-light.jpg"
            alt=""
          />
        </>
      )}

      <div className="z-10 relative flex justify-center items-center flex-col p-4">
        <div className="flex justify-between max-w-100 w-full py-6">
          <h1 className="text-4xl text-Gray-50">TODO</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            type="button"
            className="cursor-pointer"
          >
            {darkMode ? (
              <img src="./images/icon-sun.svg" alt="" />
            ) : (
              <img src="./images/icon-moon.svg" alt="" />
            )}
          </button>
        </div>
        <TodoForm handleSubmit={addTodo} darkMode={darkMode} />
        <TodoList
          todos={data}
          onTogglableCompleted={toggleCompletedTodo}
          onDelete={deleteTodoFromServer}
          onCompletedDelete={deleteCompletedTodos}
          onReorderTodoMutation={reorderTodoMutation}
          darkMode={darkMode}
        />
        <p className="text-Gray-600 py-3">Drag and drop to reoder list</p>
      </div>
    </main>
  );
};

export default App;
