import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import router from "./router";
import store from "./store";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSync,
  faThumbsUp,
  faPercentage,
  faComments
} from "@fortawesome/free-solid-svg-icons";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

library.add(faSync, faThumbsUp, faPercentage, faComments);

const options = {
  position: POSITION.TOP_RIGHT,
  timeout: 3000
};

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Toast, options);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
