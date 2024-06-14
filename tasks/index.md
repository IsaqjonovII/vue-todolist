# diff between flexbox and Grid

- they are both layout structures, but have differences
- we use flexbox for one-dimentional layout.  we can control only row or column
- in grid, we can control row and column simultanenously. it's two dimentional.


# lifecycle hooks

In our code we can use different lifecycle hooks e.g. `onBeforeMount`, `onBeforeMount`, `onMounted` `onUpdated`, `mounted`

we use `onBeforeMount` when we want to do something component mount process. 

we use `onMounted` when component mounted. for example we can use it to access window props. Or focus an input element when the component mounted

```js
    onMounted(() => {
        inputRef.value.focus()
    });
    
    onMounted(() => (
        window.addEventListener('mousemove', callbackFn)
    ))

    onUnmounted(() => (
        window.removeEventListener('mousemove', callbackFn)
    ))
```

# useAsyncData in Nuxt

we use `useAsyncData` to get data that resolve asyncrhonously. when we use it it gives us `data`, `pending`, `error`, `refresh` which are really helpful 

```js
    const { data, pending, error } = await useAsyncData("users", () => $fetch("api-link"));
```
