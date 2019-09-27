<template>
  <div>
    <Header :title="title" />
    <Navigation />
    <v-content>
      <keep-alive>
        <component
          :is="currentComponentRendered"
        />
      </keep-alive>
    </v-content>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./Header";
import Navigation from "./Navigation";
import HomeViewer from "../modules/HomeViewer/HomeViewer";
import Footer from "./Footer"

export default {
  name: "Dashboard",
  components: {
    Header,
    Navigation,
    Footer
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