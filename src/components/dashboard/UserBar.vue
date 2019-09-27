<template>
  <div>
    Current User:
    <v-chip class="large success darkenen-3 mt-3" @click="importComponent('UserPage')">
      <span>{{user}}</span>
    </v-chip>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserBar",
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    importComponent(name) {
      this.$store.dispatch("importComponent", name);
    }
  }
};
</script>
