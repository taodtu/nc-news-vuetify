<template>
  <div>
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title
        class="toolbarTitle font-weight-light display-1 pl-3 mt-3"
      >Articles about coding</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="article in articles.articles" :key="article.article_id">
          <p>{{article.title}}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import state from "./state";
import { mapGetters } from "vuex";

export default {
  name: "codingViewer",
  created() {
    this.$store.registerModule("codingViewer", state);
    this.$store.dispatch("getArticles", "coding");
  },
  computed: {
    ...mapGetters(["articles"])
  }
};
</script>