<template>
  <h2>ToDo List</h2>
  <ul v-if="myTodos.length > 0">
    <Note
      v-for="td in myTodos"
      :key="td.id"
      :note="td.title"
      :id="td.id"
      @deleteTodo="removeTodo"
      @checkedTodo="checkedTodo"
    />
  </ul>
  <h4 v-else>Empty list.</h4>
</template>

<script>
import Note from "@/components/Note.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Note,
  },
  watch: {
    todo() {
      this.$store.commit("todos/pushTodo", this.todo);
    },
  },
  methods: {
    removeTodo(id) {
      this.$store.commit("todos/removeTodo", id);
    },
    checkedTodo(id) {
      this.$store.commit("todos/checkedTodo", id);
    },
    ...mapMutations({
      setLoading: "todos/setLoading",
      pushTodo: "todos/pushTodo",
      removeTodo: "todos/removeTodo",
      checkedTodo: "todos/checkedTodo",
    }),
    ...mapActions({
      fetchTodos: "todos/fetchTodos",
    }),
  },
  mounted() {
    this.fetchTodos();
  },
  computed: {
    ...mapState({
      myTodos: (state) => state.todos.myTodos,
      isTodosLoading: (state) => state.todos.isTodosLoading,
      number: (state) => state.todos.number,
      todo: (state) => state.todo.todo,
    }),
    ...mapGetters({
      double: "todos/double",
    }),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
</style>
