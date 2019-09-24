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
    dark
  >
    <v-layout column fill-height>
      <v-list class="transparent pr-0 px-0">
        <v-list-item name="show-hide" class="my-0 py-0">
          <v-switch class="my-0 py-0" v-model="miniVariant" color="yellow lighten-4" />
        </v-list-item>

        <v-list-item
          class="text-xs-middle mx-0 px-0"
          dark
          value="true"
          :style="['HomeViewer' === currentModuleName ? {'background': '#e6b400'} : {}]"
          @click="setCurrentComponent(HomeViewer)"
        >
          <v-list-item-action class="align-center">
            <v-icon
              style="font-size:18px"
              class="text-xs-center icon ml-3"
              :style="['HomeViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
              color="grey lighten-5"
              v-html="'fas fa-home'"
            />
          </v-list-item-action>

          <v-list-item-content class="mx-0">
            <v-list-item-title
              :style="['HomeViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
              class="white--text text--lighten-5 body-2"
              v-text="'Home'"
            />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          class="text-xs-middle mx-0 px-0"
          dark
          value="true"
          :style="['TopicViewer' === currentModuleName ? {'background': '#e6b400'} : {}]"
          @click="importComponent('Topic')"
        >
          <v-list-item-action class="align-center">
            <v-icon
              style="font-size:18px"
              class="text-xs-center icon ml-3"
              :style="['TopicViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
              color="grey lighten-5"
              v-html="'fas fa-headphones'"
            />
          </v-list-item-action>
          <v-list-item-content class="mx-0">
            <v-list-item-title
              :style="['TopicViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
              class="white--text text--lighten-5 body-2"
              v-text="'Topics'"
            />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          class="text-xs-middle mx-0 px-0"
          dark
          value="true"
          :style="['UserViewer' === currentModuleName ? {'background': '#e6b400'} : {}]"
          @click="importComponent('User')"
        >
          <v-list-item-action class="align-center">
            <v-icon
              style="font-size:18px"
              class="text-xs-center icon ml-3"
              :style="['UserViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
              color="grey lighten-5"
              v-html="'fas fa-user'"
            />
          </v-list-item-action>
          <v-list-item-content class="mx-0">
            <v-list-item-title
              :style="['UserViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
              class="white--text text--lighten-5 body-2"
              v-text="'User'"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import HomeViewer from "../modules/HomeViewer/HomeViewer";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Navigation",
  data() {
    return {
      miniVariant: false,
      HomeViewer
    };
  },
  computed: {
    ...mapGetters(["currentComponentRendered"]),
    currentModuleName() {
      return this.currentComponentRendered.name;
    }
  },
  methods: {
    setCurrentComponent(payload) {
      this.$store.dispatch("getCurrentComponent", payload);
    },
    importComponent(name) {
      import(`../modules/${name}Viewer/${name}Viewer.vue`).then(component => {
        this.setCurrentComponent(component.default);
      });
    }
  }
};
</script>