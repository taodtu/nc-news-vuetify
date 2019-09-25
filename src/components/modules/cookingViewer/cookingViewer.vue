<template>
  <div>
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title
        class="toolbarTitle font-weight-light display-1 pl-3 mt-3"
      >Articles about cooking</v-toolbar-title>
    </v-toolbar>
    <ArticleList :topic="topic" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleList from "../../template/ArticleList";

export default {
  name: "cookingViewer",
  components: {
    ArticleList
  },
  data() {
    return {
      topic: "cooking"
    };
  }
};
</script>