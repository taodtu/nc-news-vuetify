import Vue from "vue";
import Vuetify, {
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VToolbar,
  VTextField,
  VTabs
} from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VToolbar,
    VTextField,
    VTabs
  },
  iconFont: "fa"
});

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
  }
});
