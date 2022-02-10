<template>
  <input type="checkbox" :id="id" :value="note" @click="checkedItem(id)" />
  <label for="jack">{{ note }}</label>
  <button @click="deleteItem(id)">X</button>
</template>

<script>
export default {
  props: {
    note: String,
    id: Number,
  },
  emits: ["deleteTodo", "checkedTodo"],
  methods: {
    deleteItem(id) {
      this.$emit("deleteTodo", id);
    },
    checkedItem(id) {
      this.$emit("checkedTodo", id);
    },
  },
};
</script>

<style scoped></style>
