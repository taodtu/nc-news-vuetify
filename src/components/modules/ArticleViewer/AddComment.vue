<template>
  <v-card class="my-3">
    <div>
      <h4 class="mx-auto pt-4 px-3">Post a comment to this article with current author</h4>
    </div>
    <div class="mx-auto px-4"><form @submit.prevent="onSubmit">
      <div class="form">
        <div class="body">
          <v-text-field hide-details placeholder="new comment" v-model="newComment" />
        </div>
        <div >
          <v-btn small class="secondary ma-3" type="submit" :disabled="newComment.length===0">Submit</v-btn>
        </div>
      </div>
    </form></div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddComment",
  props: ["id"],
  computed: {
    ...mapGetters(["user"])
  },
  data() {
    return {
      newComment: ""
    };
  },
  methods: {
    onSubmit(e) {
      this.$store.dispatch("addComment", {
        id: this.id,
        newComment: this.newComment,
        user: this.user
      });
      this.newComment = "";
    }
  }
};
</script>

