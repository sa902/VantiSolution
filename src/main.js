import App from "@/App.vue";
import pinia from "@/plugins/pinia.js";
import vuetify from "@/plugins/vuetify.js";
import Vue from "vue";
import router from "./router";
const app = new Vue({
  pinia,
  router,
  vuetify,
  render: (h) => h(App),
});
app.$mount("#app");
