<template>
  <v-app-bar app flat fixed clipped-left class="primary text--lighten-4 d-flex justify-start" dark>
    <v-app-bar-nav-icon class="mx-2" @click="changeNav" />
    <v-toolbar-title>
      <v-icon large class="mx-6">far fa-newspaper</v-icon>
    </v-toolbar-title>
    <v-toolbar-title class="toolbarTitle font-weight-light display-1 text-center">{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  props: ["title"],
  computed: {
    ...mapGetters(["drawer"])
  },
  methods: {
    changeNav() {
      this.$store.dispatch("setDrawer", !this.drawer);
    }
  }
};
</script>
