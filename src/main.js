import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.performance = true;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
