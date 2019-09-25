<template>
  <div>
    <v-card flat class="text-xs ma-3">
      <v-card-title class="title secondary--text" style="word-break: keep-all">{{article.title}}</v-card-title>
      <v-card-text class="pa-0 ml-4">
          <div class="subheading">
          <span>Topics: {{ article.topic }}</span>
          <span class="ml-3">Author: {{ article.author }}</span>
        </div>
        <div class="subheading">
          <span>Comments: {{ article.comment_count }}</span>
          <span class="ml-3">Votes: {{ article.votes }}</span>
          <span class="ml-3">Date: {{ article.created_at.split("T")[0]}}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn class="ml-2" small @click="toArticle(article.article_id)">Detail Page</v-btn>
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
    }
  }
};
</script>
