<template>
  <div>
    <div class="article-sort-order">
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
        <ToggleButton :left="'desc'" :right="'asc'" @orderClicked="handleEvent" />
      </div>
    </div>
    <CommentItem
      v-for="comment in comments"
      :key="comment.comment_id"
      :comment="comment"
    >Author: {{comment.author}}</CommentItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CommentItem from "./CommentItem";
import ToggleButton from "../../button/ToggleButton";
import { ARTICLE_SORT_CHART } from "../../constant";

export default {
  name: "CommentList",
  components: {
    CommentItem,
    ToggleButton
  },
  data() {
    return {
      sort_by: "created_at",
      order: "desc",
      ARTICLE_SORT_CHART,
      sortOptions: ["date", "votes", "author"]
    };
  },
  computed: {
    ...mapGetters(["comments", "id"])
  },
  watch: {
    sort_by() {
      this.callStore();
    },
    order() {
      this.callStore();
    }
  },
  methods: {
    callStore() {
      this.$store.dispatch("getComments", {
        id: this.id,
        sort_by: this.sort_by,
        order: this.order
      });
    },
    handleEvent({ name, value }) {
      name === "sort_by"
        ? (this.sort_by = ARTICLE_SORT_CHART[value])
        : (this[name] = value);
    }
  },
  
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