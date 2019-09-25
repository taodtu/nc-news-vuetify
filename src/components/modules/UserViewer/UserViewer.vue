<template>
  <div>
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title
        class="toolbarTitle font-weight-light display-1 pl-3 mt-3"
      >Select current user</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 md4 v-for="author in authors" :key="author.username">
          <v-card
            class="ma-3 d-flex justify-center align-center"
            :style="[user === author.username ? {'background': '#cdffc2'} : {}]"
            @click="setUser(author.username)"
          >
            <v-img
              :src="author.avatar_url"
              height="60px"
              width="60px"
              class="align-self-center mx-5"
            />
            <v-card-text class="align-self-center">
              <p>Username: {{author.username}}</p>
              <p>Name: {{author.name}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import state from "./state";
import { mapGetters } from "vuex";

export default {
  name: "UserViewer",
  computed: {
    ...mapGetters(["user", "authors"])
  },
  created() {
    this.$store.registerModule("UserViewer", state);
    this.$store.dispatch("getAuthors", [
      "jessjelly",
      "tickle122",
      "grumpy19",
      "happyamy2016",
      "cooljmessy",
      "weegembump"
    ]);
  },
  methods: {
    setUser(name) {
      this.$store.dispatch("updateUser", name);
    }
  }
};
</script>
