<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md6 v-for="article in articles.articles" :key="article.article_id">
        <v-card flat class="text-xs ma-3">
          <v-card-title class="title secondary--text" style="word-break: keep-all">{{article.title}}</v-card-title>
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
</template>

<script>
import { mapGetters } from "vuex";
import {ARTICLE_SORT_CHART} from "../constant";

export default {
  name: "codingViewer",
  data() {
    return {
      loading: false,
      error: "",
      limit: 6,
      p: 1,
      sort_by: "created_at",
      order: "desc",
      ARTICLE_SORT_CHART
    };
  },
  props: ["topic", "author"],
   created() {
    this.$store.dispatch("getArticles", { topic: this.topic });
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