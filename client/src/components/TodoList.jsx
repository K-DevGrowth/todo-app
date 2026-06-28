const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.data.map((todo) => (
        <div key={todo.name} className="flex">
          <input type="checkbox" />
          <p>{todo.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
