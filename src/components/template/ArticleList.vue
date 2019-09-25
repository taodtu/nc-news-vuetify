<template>
  <div>
    <v-container no-gutters>
      <v-layout row>
        <v-flex xs12 md6 v-for="article in articles.articles" :key="article.article_id">
          <ArticleItem
            :article="article"
            :showTopicLink="showTopicLink"
            :showAuthorLink="showAuthorLink"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <div class="d-flex justify-center">
      <Page :pageTotal="pageTotal" :p="p" @pageClicked="handleEvent" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ARTICLE_SORT_CHART } from "../constant";
import ArticleItem from "./ArticleItem";
import Page from "../button/Page";

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
  components: {
    ArticleItem,
    Page
  },
  props: ["topic", "author", "showTopicLink", "showAuthorLink"],
  created() {
    this.callStore();
  },
  computed: {
    ...mapGetters(["articles"]),
    pageTotal() {
      return Math.ceil(this.articles.total_count / this.limit);
    }
  },
  watch: {
    topic() {
      this.callStore();
    },
    author() {
      this.callStore();
    },
    limit() {
      this.callStore();
    },
    sort_by() {
      this.callStore();
    },
    order() {
      this.callStore();
    },
    p() {
      this.callStore(this.p);
    }
  },
  methods: {
    callStore(p = 1) {
      this.loading = true;
      this.p = p;
      this.$store
        .dispatch("getArticles", {
          topic: this.topic,
          author: this.author,
          sort_by: this.sort_by,
          order: this.order,
          limit: this.limit,
          p
        })
        .then(res => (this.loading = false))
        .catch(error => {
          this.loading = false;
          this.error = error;
        });
    },
    toArticle(id) {
      console.log(id);
    },
    handleEvent({ name, value }) {
      name === "sort_by"
        ? (this.sort_by = ARTICLE_SORT_CHART[value])
        : (this[name] = value);
    }
  }
};
</script>