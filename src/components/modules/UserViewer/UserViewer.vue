<template>
  <div>{{user}}</div>
</template>

<script>
import state from "./state"
import { mapGetters } from 'vuex';

export default {
  name: "UserViewer",
  computed:{
    ...mapGetters(["user"])
  },
  created(){
    this.$store.registerModule("UserViewer", state);
    this.$store.dispatch("getAuthors", ["jessjelly", "tickle122", "grumpy19", "happyamy2016", "cooljmessy", "weegembump"])
  }
};
</script>
