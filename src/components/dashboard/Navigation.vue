<template>
  <v-navigation-drawer
    class="drawer secondary"
    :mini-variant="miniVariant"
    disable-resize-watcher
    permanent
    app
    floating
    fixed
    clipped
    width="180"
  >
    <v-layout column fill-height>
      <v-list class="transparent pr-0 px-0" dense>
        <v-list-item name="show-hide" dark>
          <v-switch class="mt-0 mb-0" v-model="miniVariant" color="yellow lighten-4" />
        </v-list-item>

        <v-list-item
          class="text-xs-middle mx-0 px-0"
          value="true"
          :style="['HomeViewer' === currentModuleName ? {'background': '#e6b400'} : {}]"
          @click="setCurrentComponent(DashboardModule)"
        >
          <v-list-item-action class="align-center">
            <v-icon
              style="font-size:18px"
              class="text-xs-center icon ml-1"
              :style="['HomeViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
              color="grey lighten-5"
              v-html="'fas fa-columns'"
            />
          </v-list-item-action>

          <v-list-item-content class="mx-0">
            <v-list-item-title
              :style="['HomeViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
              class="grey--text text--lighten-5 body-2"
              v-text="'Dashboard'"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import HomeViewer from "../modules/HomeViewer/HomeViewer";
import { mapGetters } from "vuex";

export default {
  name: "Navigation",
  data() {
    return {
      miniVariant: false
    };
  },
  computed: {
    ...mapGetters(["currentComponentRendered"]),
    currentModuleName() {
      return this.currentComponentRendered.name;
    }
  },
  created() {
    this.$store.dispatch("getCurrentComponent", HomeViewer);
  }
};
</script>