<template>
  <div>
    <v-btn
      class="accent"
      small
      :disabled="on"
      @click="$emit('orderClicked', {value: left, name:'order'}), on=!on"
    >{{left}}</v-btn>
    <v-btn
      small
      class="accent"
      :disabled="!on"
      @click="$emit('orderClicked', {value:right, name:'order'}), on=!on"
    >{{right}}</v-btn>
  </div>
</template>

<script>
export default {
  name: "ToggleButton",
  data() {
    return {
      on: true
    };
  },
  props: ["left", "right"]
};
</script>