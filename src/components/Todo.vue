<script setup lang="ts">
import { ref } from "vue";
import { useTodosStore } from "../store/todo";
import { ITodo } from "../types";

// Define props
const props = defineProps<ITodo>();

const { toggleTodoStatus, removeTodo } = useTodosStore();

const checked = ref(props.completed);

const changeTodoStatus = () => {
  toggleTodoStatus(props.id);
  checked.value = !checked.value;
};

const handleRemoveTodo = () => {
  removeTodo(props.id);
};
</script>

<template>
  <li
    class="w-full p-2 rounded-md border border-bottom flex justify-between"
    :class="{ 'opacity-60': checked }"
  >
    <span :class="{ 'line-through': checked }">{{ text }}</span>

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
