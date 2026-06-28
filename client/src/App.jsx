import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

const App = () => {
  const {
    data,
    isPending,
    error,
    addTodo: addTodoToServer,
    deleteTodo: deleteTodoFromServer,
    toggleCompletedTodo,
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
    <main className="relative bg-Gray-50 h-dvh">
      <img
        className="absolute top-0"
        src="../images/bg-desktop-light.jpg"
        alt=""
      />

      <div className="z-10 relative flex justify-center items-center flex-col h-vh top-20">
        <div className="flex justify-between max-w-100 w-full py-6">
          <h1 className="text-4xl text-Gray-50">TODO</h1>
          <button>
            <img src="./images/icon-moon.svg" alt="" />
          </button>
        </div>
        <TodoForm handleSubmit={addTodo} />
        <TodoList
          todos={data}
          onTogglableCompleted={toggleCompletedTodo}
          onDelete={deleteTodoFromServer}
        />
      </div>
    </main>
  );
};

export default App;
