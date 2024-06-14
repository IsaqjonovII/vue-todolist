import { expect, describe, it, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodosStore } from "./todo";

describe("Todos Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should add new todo", () => {
    const { todos, addTodo } = useTodosStore();
    expect(todos.length).toBe(0);
    addTodo("new todo");
    expect(todos.length).toBe(1);
  });

  it("should change todo status", () => {
    const { todos, completedTodos, addTodo, toggleTodoStatus } =
      useTodosStore();
    addTodo("new todo");
    addTodo("new todo 1");
    expect(completedTodos.length).toBe(0);
    expect(todos.length).toBe(2);

    expect(todos[0].completed).toBeFalsy();
    toggleTodoStatus(0);
    expect(todos[0].completed).toBeTruthy();
  });

  it("should remove todo", () => {
    const { todos, addTodo, removeTodo } = useTodosStore();
    addTodo("new todo");
    addTodo("new todo 1");
    expect(todos.length).toBe(2);
    removeTodo(0);
    expect(todos.length).toBe(1);
  });
});
