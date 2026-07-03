import { useTheme } from "../hooks/useTheme";
import { useTodos } from "../hooks/useTodos";

const TodoForm = () => {
  const { theme } = useTheme();
  const { addTodo } = useTodos();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.todos.value;
    e.target.reset();
    addTodo(name);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-100">
      <label htmlFor="todos"></label>
      <input
        className={`w-full px-4 py-2 rounded shadow ${theme === "dark" ? "bg-Navy-900 text-white" : "bg-white"}`}
        placeholder="Create a new todo..."
        type="text"
        name="todos"
        id="todos"
      />
    </form>
  );
};

export default TodoForm;
