import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#25395b",
        secondary: "#304b78",
        accent: "#e6b400",
        error: "#F44336",
        warning: "#ffeb3b",
        info: "#edf1f8",
        success: "#4caf50"
      }
    }
  },
});
