<template>
  <v-app-bar app flat fixed clipped-left class="primary text--lighten-4 d-flex justify-center" dark>
    <v-toolbar-title>
      <v-icon large class="mr-3">far fa-newspaper</v-icon>
    </v-toolbar-title>
    <v-toolbar-title class="toolbarTitle font-weight-light display-1 text-center">{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  props: ["title"]
};
</script>
