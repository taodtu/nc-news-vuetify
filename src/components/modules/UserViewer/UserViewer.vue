<template>
  <div>
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title
        class="toolbarTitle font-weight-light display-1 pl-3 mt-3"
      >Select current user</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout row v-if="!loading">
        <v-flex xs12 sm6 md4 v-for="author in authors" :key="author.username">
          <v-card
            class="ma-3 d-flex justify-center align-center"
            :style="[user === author.username ? {'background': '#cdffc2'} : {}]"
            @click="setUser(author.username), importComponent('UserPage')"
          >
            <v-img
              :src="author.avatar_url"
              height="60px"
              width="60px"
              class="align-self-center mx-5"
            />
            <v-card-text class="align-self-center">
              <p>User: {{author.username}}</p>
              <p>Name: {{author.name}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-progress-linear
        v-if="loading"
        color="deep-purple accent-4"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
    </v-container>
  </div>
</template>

<script>
import state from "./state";
import { mapGetters } from "vuex";

export default {
  name: "UserViewer",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters(["user", "authors"])
  },
  async created() {
    this.$store.registerModule("UserViewer", state);
    this.loading = true;
    await this.$store.dispatch("getAuthors", [
      "jessjelly",
      "tickle122",
      "grumpy19",
      "happyamy2016",
      "cooljmessy",
      "weegembump"
    ]);
    this.loading = false;
  },
  methods: {
    setUser(name) {
      this.$store.dispatch("updateUser", name);
    },
    importComponent(name) {
      this.$store.dispatch("importComponent", name);
    }
  }
};
</script>
