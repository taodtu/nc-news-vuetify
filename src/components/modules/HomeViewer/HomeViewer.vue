<template>
  <div class="px-2">
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title
        class="toolbarTitle font-weight-light display-1 pl-3 mt-3"
      >Welcome to Northcoders News!</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout column justify-center>
        <p class="pa-3">
          Northcoders News is a social news aggregation, web content rating, and discussion website.
          Northcoders News has articles which are divided into topics. Each article has user curated
          ratings and can be up or down voted using the API. Users can also add comments about an article.
          Comments can also be up or down voted. A user can add comments and remove any comments
          (comment can only be deleted by its author, so please select the correct current user to delete
          a comment) which they have added.
        </p>
        <v-flex wrap class="justify-space-between">
          <v-btn class="ml-3" color="pink" dark @click="setTopic">
            <v-icon left>fas fa-external-link-alt</v-icon>
            {{showTopic? "Hide the topics":"Click to get topics"}}
          </v-btn>
          <p v-if="showTopic" class="ma-2">
            <v-chip>Click the topics on the left to browse</v-chip>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeViewer",
  methods: {
    setTopic() {
      this.$store.dispatch("setTopic", !this.showTopic);
    }
  },
  computed: {
    ...mapGetters(["showTopic"])
  },
  created() {
    this.$store.dispatch("getTopics")
    .catch(error=>error);
  }
};
</script>
