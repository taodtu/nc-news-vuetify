<template>
  <div class="page-number">
    <v-chip
      v-for="num in list"
      :key="num"
      :disabled="num===p"
      @click="$emit('pageClicked', {value:num, name:'p'})"
      class="accent mx-1"
    >{{num}}</v-chip>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: ["pageTotal", "p"],
  computed: {
    list() {
      let list = [];
      for (let i = 1; i <= this.pageTotal; i++) {
        list.push(i);
      }
      return list;
    }
  }
};
</script>
