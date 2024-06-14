<script setup lang="ts">
import { ref } from "vue";

interface Emits {
  (e: "add-todo", value: string): void;
}

const emit = defineEmits<Emits>();

const inputValue = ref("");

const handleAddTodo = () => {
  emit("add-todo", inputValue.value);
  inputValue.value = "";
};
</script>
<template>
  <form
    class="flex items-center justify-between w-full gap-2"
    @submit.prevent="handleAddTodo"
  >
    <input
      v-model="inputValue"
      class="w-full py-1 px-2 h-10 rounded-md border border-gray-300"
      type="text"
      required
      :minlength="5"
      :maxlength="200"
    />
    <button
      class="p-2 w-32 border border-gray-400 bg-gray-200 rounded cursor-pointer"
      type="submit"
    >
      Add Task
    </button>
  </form>
</template>
