<template>
  <div>
    <h1>Это страница поста с ID = {{ $route.params.id }}</h1>
    <div>UserId: {{ mytodo.userId }}</div>
    <div>Id: {{ mytodo.Id }}</div>
    <div>Title: {{ mytodo.title }}</div>
    <div>Completed: {{ mytodo.completed }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      todos: [],
      mytodo: {},
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.todos = this.getTodos;
    console.log("====================================");
    console.log("TODOS", this.todos);
    console.log("====================================");
    this.findTodo;
  },
  computed: {
    // findTodo(id) {
    //   console.log("3333");
    //   this.todos.forEach((todo) => {
    //     if (todo.id === id) {
    //       console.log("====================================");
    //       console.log("TODO", todo);
    //       console.log("====================================");
    //       this.mytodo = todo;
    //       return this.mytodo;
    //     }
    //   });
    // },

    ...mapGetters({
      getTodos: "todos/getTodos",
    }),
  },
};
</script>

<style scoped></style>
