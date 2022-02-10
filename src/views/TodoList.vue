<template>
  <InputTodo />
  <ListTodo />
</template>

<script>
import InputTodo from "@/components/InputTodo.vue";
import ListTodo from "@/components/ListTodo.vue";

export default {
  components: {
    InputTodo,
    ListTodo,
  },
};
</script>

<style scoped></style>
