<template>
  <div>
    <v-card class="text-xs mx-4 my-2">
      <v-card-title class="title secondary--text" style="word-break: keep-all">{{article.title}}</v-card-title>
      <v-card-text class="pa-0 ml-4">
        <div class="subheading pb-2">
          <span class="mr-3">Topics: {{ article.topic }}</span>

          <span>Author: {{ article.author }}</span>
        </div>
        <div class="subheading">
          <span>Comments: {{ article.comment_count }}</span>
          <span class="ml-3">Votes: {{ article.votes }}</span>
          <span class="ml-3">Date: {{ article.created_at.split("T")[0]}}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="ml-2 white--text"
          color="#ff8400"
          small
          @click="changeID(article.article_id), importComponent('Article')"
        >Detail Page</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ArticleItem",
  computed: {
    ...mapGetters(["topic"])
  },
  props: {
    article: {
      type: Object
    },
    showAuthorLink: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    importComponent(name) {
      this.$store.dispatch("importComponent", name);
    },
    showTopics() {
      this.$store.dispatch("setTopic", true);
    },
    hideTopics() {
      this.$store.dispatch("setTopic", false);
    },
    changeID(id) {
      this.$store.dispatch("setID", id);
    },
    changeTopic(name) {
      this.$store.dispatch("changeTopic", name);
    }
  }
};
</script>
