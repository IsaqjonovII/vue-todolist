<script setup lang="ts">
import { useTodosStore } from "./store/todo";

import TodoForm from "./components/Form.vue";
import Todo from "./components/Todo.vue";

const { todos, addTodo } = useTodosStore();

const handleAddTodo = (value: string) => {
  addTodo(value);
};
</script>
<template>
  <main
    class="flex flex-col items-center p-4 max-w-md mx-auto bg-slate-100 rounded-md border border-gray-300 my-20"
  >
    <TodoForm @add-todo="handleAddTodo" />

    <ul
      class="border border-gray-300 w-full p-2 gap-2 mt-4 rounded-md"
      v-if="todos.length"
    >
      <Todo v-for="todo in todos" v-bind="todo" />
    </ul>
  </main>
</template>
