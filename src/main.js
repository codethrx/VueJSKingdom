import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import About from "./views/About.vue";
import Id from "./views/Id.vue";
import Home from "./views/Home.vue";
import store from "./context/store";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/about/:id", component: Id },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).provide("store", store).use(router).mount("#app");
