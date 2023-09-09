import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(router).use(store).mount("#app");
