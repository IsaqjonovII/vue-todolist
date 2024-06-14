<script setup lang="ts">
import { ref } from "vue";
import { useTodosStore } from "../store/todo";
import TodoForm from "./components/Form.vue";

import { ITodo } from "../types";

const { id, text, completed } = defineProps<ITodo>();

const { toggleTodoStatus, removeTodo, todos } = useTodosStore();

const checked = ref(false);

const changeTodoStatus = () => {
  toggleTodoStatus(id);
};

const handleRemoveTodo = () => {
  removeTodo(id);
};

console.log(id, text, completed);


</script>

<template>
  <li
    class="w-full p-2 rounded-md border border-bottom flex justify-between"
    :class="{ 'bg-slate-500 line-through': checked }"
  >
    <span>{{ text }}</span>

    <div class="flex items-center gap-4">
      <input
        type="checkbox"
        class="align-middle"
        name="todo"
        id="completed-todo"
        :checked="checked"
        @change="changeTodoStatus"
      />

      <button @click="handleRemoveTodo">❌</button>
    </div>
  </li>
</template>
