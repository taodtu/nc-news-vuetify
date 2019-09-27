<template>
  <div>
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title class="toolbarTitle font-weight-light display-1 pl-3 mt-3">Articles Page</v-toolbar-title>
    </v-toolbar>
    <ArticleList />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleList from "./ArticleList";

export default {
  name: "TopicViewer",
  components: {
    ArticleList
  }
};
</script>