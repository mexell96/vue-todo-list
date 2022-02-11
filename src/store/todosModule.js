import axios from "axios";

export const todosModule = {
  state: () => ({
    myTodos: [],
    isTodosLoading: false,
    number: 1,
  }),
  getters: {
    double(state) {
      return state.number * 2;
    },
    getTodos(state) {
      return state.myTodos;
    },
  },
  mutations: {
    setTodos(state, myTodos) {
      state.myTodos = myTodos;
    },
    setLoading(state, bool) {
      state.isTodosLoading = bool;
    },
    pushTodo(state, todo) {
      state.myTodos = [...state.myTodos, todo];
    },
    removeTodo(state, id) {
      state.myTodos = state.myTodos.filter((todo) => todo.id !== id);
    },
    checkedTodo(state, id) {
      state.myTodos = state.myTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        commit("setTodos", response.data);
      } catch (e) {
        console.log("Error - ", e);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
