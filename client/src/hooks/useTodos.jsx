import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, getTodos } from "../requests";

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

  return {
    data: result.data,
    isPending: result.isPending,
    error: result.error,
    addTodo: (name) => newTodoMutation.mutate({ name, completed: false }),
  };
};
