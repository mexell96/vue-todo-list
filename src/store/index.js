import { createStore } from "vuex";
import { todosModule } from "./todosModule";
import { todoModule } from "./todoModule";
import { loginModule } from "./loginModule";

export default createStore({
  modules: {
    todos: todosModule,
    todo: todoModule,
    login: loginModule,
  },
});
