<template>
  <li>
    <input type="checkbox" :id="id" :value="note" @click="checkedItem(id)" />
    <span @click="$router.push(`/${id}`)">{{ note }}</span>
    <button @click="deleteItem(id)">X</button>
  </li>
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
