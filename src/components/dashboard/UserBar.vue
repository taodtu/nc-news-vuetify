<template>
  <div>
    Current User:
    <div class="mt-3">{{user}}</div>
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
