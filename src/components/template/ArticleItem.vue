<template>
  <div>
    <v-card flat class="text-xs mx-3 my-1">
      <v-card-title class="title secondary--text" style="word-break: keep-all">{{article.title}}</v-card-title>
      <v-card-text class="pa-0 ml-4">
        <div class="subheading pb-2">
          <v-chip
            class="secondary lighten-3 mr-3"
            link
            small
            v-if="showTopicLink"
            @click="importComponent(article.topic), showTopics()"
          >
            <span>Topics: {{ article.topic }}</span>
          </v-chip>
          
            <span>Author: {{ article.author }}</span>
          
        </div>
        <div class="subheading">
          <span>Comments: {{ article.comment_count }}</span>
          <span class="ml-3">Votes: {{ article.votes }}</span>
          <span class="ml-3">Date: {{ article.created_at.split("T")[0]}}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn class="ml-2 success" small @click="toArticle(article.article_id)">Detail Page</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    article: {
      type: Object
    },
    showTopicLink: {
      type: Boolean,
      default: true
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
    }
  }
};
</script>
