const TodoForm = ({ handleSubmit, darkMode }) => {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-100">
      <input
        className={`w-full px-4 py-2 rounded shadow ${darkMode ? "bg-Navy-900 text-white" : "bg-white"}`}
        placeholder="Create a new todo..."
        type="text"
        name="todos"
      />
    </form>
  );
};

export default TodoForm;
