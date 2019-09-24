<template>
  <div>
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title
        class="toolbarTitle font-weight-light display-1 pl-3 mt-3"
      >Articles about coding</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout row>
        <v-flex xs12 md6 v-for="article in articles.articles" :key="article.article_id">
          <v-card flat class="text-xs ma-3">
            <v-card-title class="title secondary--text">{{article.title}}</v-card-title>
            <v-card-text class="pa-0 ml-4">
              <div class="subheading">
                <span>Author: {{ article.author }}</span>
                <span class="ml-3">Votes: {{ article.votes }}</span>
                <span class="ml-3">Date: {{ article.created_at.split("T")[0]}}</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn class="ml-2" small @click="toArticle(article.article_id)">Detail Page</v-btn>
            </v-card-actions>
          </v-card>
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
  },
  methods: {
    toArticle(id) {
      console.log(id);
    }
  }
};
</script>