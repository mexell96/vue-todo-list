import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.component("the-navbar", Navbar);
app.component(
  "input-todo",
  defineAsyncComponent(() => {
    return import("./components/InputTodo.vue");
  })
);
app.use(store);
app.use(router);
app.mount("#app");
