import Vue from "vue";
import Vuetify, {
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTextField,
  transitions,
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
    VGrid,
    VToolbar,
    VTextField,
    transitions,
    VTabs
  },
  iconFont: "fa"
});

const opts = {};

export default new Vuetify(opts);
