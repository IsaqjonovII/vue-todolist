import { defineStore } from "pinia";
import { computed, ref } from "vue";

import type { ITodo } from "../types";

export const useTodosStore = defineStore("todos-store", () => {
  const todos = ref<ITodo[]>([]);
  const todoId = ref(0);

  const completedTodos = computed(() =>
    todos.value.filter((todo) => todo.completed),
  );

  const addTodo = (todoText: string) => {
    todos.value.push({
      id: todoId.value++,
      text: todoText,
      completed: false,
    });
  };

  const removeTodo = (todoIdx: number) => {
    const todoIdToRemove = Number(todoIdx);
    const index = todos.value.findIndex((todo) => todo.id === todoIdToRemove);

    if (index > -1) {
      todos.value.splice(index, 1);
      console.log(`Removed todo with id ${todoIdToRemove}`);
    } else {
      alert(`Todo with id ${todoIdToRemove} not found`);
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
    completedTodos,
    addTodo,
    removeTodo,
    toggleTodoStatus,
  };
});
