<template>
  <div>
    Current User:
    <v-chip class="large success darkenen-3 mt-3">
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
  }
};
</script>
