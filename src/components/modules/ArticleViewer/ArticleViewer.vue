<template>
  <div>
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title class="toolbarTitle font-weight-light display-1 pl-3 mt-3">Article Page</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-card class="d-flex-row">
        <div class="subheading justify-center mx-2">
          <v-chip
            class="accent my-3 mr-2"
            link
            small
            @click="importComponent(article.topic), showTopics()"
          >
            <span>Topics: {{ article.topic }}</span>
          </v-chip>
          <span>Author: {{ article.author }}</span>
          <span class="ml-3">Comments: {{ article.comment_count }}</span>
          <span class="ml-3">Date: {{date}}</span>
        </div>
        <div>
          <v-card-title class="primary--text pt-0 title mb-0">Title: {{article.title}}</v-card-title>
        </div>
        <div class="mt-0">
          <v-card-text class="secondary--text">{{article.body}}</v-card-text>
        </div>
        <Vote :votes="article.votes" :id="article.article_id" v-on:updateVote="onUpdateVote" />
      </v-card>
      <AddComment :id="id" />
      <CommentList />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vote from "../../button/Vote";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import articleState from "./state/article"

export default {
  name: "ArticleViewer",
  components: {
    Vote,
    AddComment,
    CommentList
  },
  computed: {
    ...mapGetters(["article", "id"]),
    date() {
      return this.article.created_at && this.article.created_at.split("T")[0];
    }
  },
  methods: {
    importComponent(name) {
      this.$store.dispatch("importComponent", name);
    },
    showTopics() {
      this.$store.dispatch("setTopic", true);
    },
    onUpdateVote(change) {
      this.article.votes += change; //optimistic response
      //dispatch can only take one additional argument!!!
      this.$store
        .dispatch("updateArticle", {
          id: this.article.article_id,
          change
        })
        .catch(error => {
          this.article.votes -= change;
        });
    },
    callStore(){
      this.$store.dispatch("getArticle", this.id)
    }
  },
  created(){
    this.$store.registerModule("article", articleState);
    this.callStore()
  }
};
</script>
