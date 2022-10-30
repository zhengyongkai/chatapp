import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "amfe-flexible/index.js";
import "@nutui/nutui/dist/style.css";

import components from "./components";

import longpress from '@/utils/longpress'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(components)
app.use(longpress);
app.mount("#app");
