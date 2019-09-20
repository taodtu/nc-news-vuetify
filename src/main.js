import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import Vuetify from "vuetify";
import vuetify from './plugins/vuetify';

Vue.use(Vuetify, {
  theme: {
    // BLUE AND YELLOW
    primary: "#25395b",
    secondary: "#304b78",
    accent: "#e6b400",
    error: "#F44336",
    warning: "#ffeb3b",
    info: "#edf1f8",
    success: "#4caf50"
  }
});

Vue.config.performance = true;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
