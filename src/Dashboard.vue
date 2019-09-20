<template>
  <v-app>
    <v-navigation-drawer
      class="drawer secondary"
      :mini-variant="miniVariant"
      disable-resize-watcher
      app
      permanent
      floating
      fixed
      clipped
      width="160"
    ></v-navigation-drawer>
    <v-app-bar
      app
      flat
      fixed
      clipped-left
      class="primary grey--text text--lighten-4 d-flex justify-center"
      dark
    >
      <v-toolbar-title>
        <v-icon large class="mr-3">far fa-newspaper</v-icon>
      </v-toolbar-title>
      <v-toolbar-title class="toolbarTitle font-weight-light display-1 text-center">{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <keep-alive>
        <component :is="currentComponentRendered" />
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      title: "NC News",
      miniVariant: false
    };
  },
  computed: {
    ...mapGetters(["currentComponentRendered"])
  }
};
</script>

<style lang="scss" scoped>
</style>