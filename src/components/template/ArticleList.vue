<template>
  <div>
    <div class="d-flex justify-start align-center mx-3">
      <v-select
        class="ml-4 mt-3 mb-0 pb-0 dense select"
        hide-details
        label="Sort By"
        v-model="ARTICLE_SORT_CHART[sort_by]"
        @change="handleEvent( {value:ARTICLE_SORT_CHART[sort_by], name:'sort_by'})"
        :items="sortOptions"
      />
      <v-spacer></v-spacer>
      <ToggleButton :left="'desc'" :right="'asc'" @orderClicked="handleEvent" class="mr-5" />
      <v-spacer></v-spacer>
    </div>
    <v-container no-gutters class="mt-0 pt-0">
      <v-layout row class="mt-0 pt-0">
        <v-flex xs12 md6 v-for="article in articles.articles" :key="article.article_id">
          <ArticleItem
            :article="article"
            :showTopicLink="showTopicLink"
            :showAuthorLink="showAuthorLink"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <div class="d-flex justify-center mt-2">
      <Page :pageTotal="pageTotal" :p="p" @pageClicked="handleEvent" class="mx-3" />
      <v-select
        class="ml-2 mt-0 pt-0 select"
        chips
        label="Items per page"
        v-model="limit"
        :items="list"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ARTICLE_SORT_CHART } from "../constant";
import ArticleItem from "./ArticleItem";
import Page from "../button/Page";
import ToggleButton from "../button/ToggleButton";

export default {
  name: "codingViewer",
  data() {
    return {
      sortOptions: ["date", "votes", "author", "comments"],
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
    Page,
    ToggleButton
  },
  props: ["topic", "author", "showTopicLink", "showAuthorLink"],
  created() {
    this.callStore();
  },
  computed: {
    ...mapGetters(["articles"]),
    pageTotal() {
      return Math.ceil(this.articles.total_count / this.limit);
    },
    list() {
      let list = [];
      for (let i = 2; i <= 12; i+=2) {
        list.push(i);
      }
      return list;
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
    handleEvent({ name, value }) {
      name === "sort_by"
        ? (this.sort_by = ARTICLE_SORT_CHART[value])
        : (this[name] = value);
    }
  }
};
</script>

<style scoped>
.v-select__selections input {
  display: none;
}
.select {
  max-width: 150px;
}
</style>