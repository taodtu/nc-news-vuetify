<template>
  <div>
    <v-toolbar color="white" class="grey--text d-flex align-center text--darken-4" flat>
      <v-toolbar-title class="toolbarTitle font-weight-light display-1 pl-3 mt-3">{{user}}</v-toolbar-title>
      <v-switch class="ml-7 pt-3" v-model="showComments" label="Comments" hide-details></v-switch>
    </v-toolbar>
    <ArticleList :showAuthorLink="false" :author="user" v-if="!showComments" />
    <CommentList :id="user" v-if="showComments" belongTo="Author" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleList from "../Articles/ArticleList";
import CommentList from "../Comments/CommentList";

export default {
  name: "UserPageViewer",
  data() {
    return {
      showComments: false
    };
  },
  components: {
    ArticleList,
    CommentList
  },
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    this.$store.dispatch("changeTopic", "");
  }
};
</script>
