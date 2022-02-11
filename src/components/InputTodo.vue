<template>
  <form @submit.prevent>
    <input
      type="text"
      v-model.trim="newTodo"
      @keyup.enter="createTodo"
      :placeholder="placeholder"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      placeholder: "Wrire a note",
    };
  },
  methods: {
    createTodo() {
      const td = {
        userId: 1,
        id: Date.now(),
        title: this.newTodo,
        completed: false,
      };
      this.newTodo = "";
      this.$store.commit("todo/createTodo", td);
    },
  },
};
</script>

<style scoped></style>
