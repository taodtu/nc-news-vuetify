<template>
  <div>
    <Header :title="title" />
    <Navigation />
    <v-content>
      <component :is="currentComponentRendered" class="px-2" />
    </v-content>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./Header";
import Navigation from "./Navigation";
import HomeViewer from "../modules/HomeViewer/HomeViewer";

export default {
  name: "Dashboard",
  components: {
    Header,
    Navigation
  },
  data() {
    return {
      title: "NC News"
    };
  },
  computed: {
    ...mapGetters(["currentComponentRendered"])
  },
  created() {
    this.$store.dispatch("getCurrentComponent", HomeViewer);
  }
};
</script>

<style lang="scss" scoped>
</style>