<template>
  <div class="d-flex justify-center aligh-center">
    <v-btn color="success" class="mb-3 mx-2 lighten-1" small :disabled="vote > 0" @click="$emit('updateVote', 1), vote++">+ vote!</v-btn>
    <span class="mt-1">Votes: {{votes}}</span>
    <v-btn color="pink" class="mb-3 mx-2 lighten-1 white--text" small :disabled="vote < 0" @click="$emit('updateVote', -1), vote--">- vote!</v-btn>
  </div>
</template>

<script>
export default {
  name: "Vote",
  props: ["votes", "id"],
  data() {
    return {
      vote: 0
    };
  }
};
</script>

<style scoped>

</style>