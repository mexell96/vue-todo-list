<template>
  <input-todo />
  <ListTodo />
</template>

<script>
import ListTodo from "@/components/ListTodo.vue";

export default {
  components: {
    ListTodo,
  },
};
</script>

<style scoped></style>
