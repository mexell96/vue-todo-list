export const todoModule = {
  state: () => ({
    todo: {},
  }),
  mutations: {
    createTodo(state, todo) {
      state.todo = todo;
    },
  },
  namespaced: true,
};
