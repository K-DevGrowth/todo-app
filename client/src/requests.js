const baseUrl = "/api/v1/todos";

export const getTodos = async () => {
  const res = await fetch(baseUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
};

export const createTodo = async (newTodo) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  };

  const res = await fetch(baseUrl, options);

  if (!res.ok) {
    throw new Error("Failed to create todo");
  }

  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete todo");
  }
};

export const updatedTodo = async ({ id, updatedTodo }) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  };

  const res = await fetch(`${baseUrl}/${id}`, options);

  if (!res.ok) {
    throw new Error("Failed to update todo");
  }

  return res.json();
};

export const deleteTodos = async () => {
  const res = await fetch(baseUrl, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete todos");
  }
};

export const reorders = async (id, newOrder) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ order: newOrder }),
  });

  if (!res.ok) {
    throw new Error("Failed to reorders todos");
  }

  return res.json();
};
