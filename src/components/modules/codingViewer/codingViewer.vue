<template>
  <div>
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title
        class="toolbarTitle font-weight-light display-1 pl-3 mt-3"
      >Articles about coding</v-toolbar-title>
    </v-toolbar>
    <ArticleList />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleList from "../../template/ArticleList";

export default {
  name: "codingViewer",
  components: {
    ArticleList
  },
  created() {
    this.$store.dispatch("getArticles", { topic: "coding" });
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