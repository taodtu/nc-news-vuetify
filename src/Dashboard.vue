<template>
  <v-app>
      <v-navigation-drawer>
          nav
      </v-navigation-drawer>
      <v-toolbar>

      </v-toolbar>
      <v-content>
          <keep-alive>
              <component :is="currentComponentRendered" />
          </keep-alive>
      </v-content>

  </v-app>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
      return {
          title: "NC News"
      }
  },
};
</script>

<style lang="scss" scoped>
</style>