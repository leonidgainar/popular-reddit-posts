import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSync,
  faThumbsUp,
  faPercentage,
  faComments
} from "@fortawesome/free-solid-svg-icons";

library.add(faSync, faThumbsUp, faPercentage, faComments);

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
