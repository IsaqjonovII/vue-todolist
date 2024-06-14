import { defineStore } from "pinia";
import { ref } from "vue";

import type { ITodo } from "../types";

export const useTodosStore = defineStore("todos-store", () => {
  const todos = ref<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    todos.value.push(todo);
  };

  const removeTodo = (todoIdx: number) => {
    const index = todos.value.findIndex((todo) => todoIdx == todo.id);

    if (index > -1) {
      todos.value.splice(index, 1);
    }
  };

  const toggleTodoStatus = (todoIdx: number) => {
    const index = todos.value.findIndex((todo) => todo.id === todoIdx);

    if (index !== -1) {
      const todo = todos.value.find((todo) => todo.id === todoIdx);
      todo!.completed = !todo?.completed;
    }
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodoStatus,
  };
});
