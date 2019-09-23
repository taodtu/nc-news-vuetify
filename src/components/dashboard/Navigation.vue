<template>
  <v-navigation-drawer
    class="drawer secondary"
    :mini-variant="miniVariant"
    disable-resize-watcher
    permanent
    app
    floating
    fixed
    clipped
    width="180"
  >
    <v-layout column fill-height>
      <v-list class="transparent pr-0" dense>
        <v-list-item name="show-hide" class="minify-button m-1" dark>
          <v-switch v-model="miniVariant" inset color="white lighten-4"></v-switch>
        </v-list-item>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      miniVariant: false
    };
  }
};
</script>