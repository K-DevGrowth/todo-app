import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTodo,
  deleteTodo,
  deleteTodos,
  getTodos,
  reorderTodo,
  updateTodo,
} from "../services/todoService";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const result = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    refetchOnWindowFocus: false,
  });

  const newTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deletedTodosMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const reorderMutation = useMutation({
    mutationFn: reorderTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    todos: result.data,
    isPending: result.isPending,
    error: result.error,
    addTodo: (name) => newTodoMutation.mutate({ name, completed: false }),
    deleteTodo: (id) => deleteTodoMutation.mutate(id),
    toggleCompletedTodo: (id, completed) =>
      updateTodoMutation.mutate({ id, updatedTodo: { completed: !completed } }),
    deleteCompletedTodos: () => deletedTodosMutation.mutate(),
    reorderTodoMutation: (id, newOrder) =>
      reorderMutation.mutate({ id, newOrder }),
  };
};
