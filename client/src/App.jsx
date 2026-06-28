import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

const App = () => {
  const { data, isPending, error, addTodo: addTodoToServer } = useTodos();

  const addTodo = async (e) => {
    e.preventDefault();
    const name = e.target.todos.value;
    e.target.reset();
    addTodoToServer(name);
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>TODO</h1>
      <SearchBar handleSubmit={addTodo} />
      <TodoList todos={data} />
    </div>
  );
};

export default App;
