<template>
  <div>
    <v-navigation-drawer
      class="drawer secondary"
      :mini-variant="miniVariant"
      disable-resize-watcher
      app
      permanent
      floating
      fixed
      clipped
      width="160"
    >
      <v-layout column fill-height>
        <v-list class="transparent pr-0">
          <v-list-tile v-if="miniVariant" name="show-hide" class="minify-button m-1">
            <v-list-tile-action class="ml-0">
              <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon
                  class="icon text-xs-center"
                  color="grey lighten-4"
                >{{miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'}}</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile
            class="text-xs-middle mx-0 px-0"
            value="true"
            :style="['HomeViewer' === currentModuleName ? {'background': '#e6b400'} : {}]"
            @click="setCurrentComponent(DashboardModule)"
          >
            <v-list-tile-action class="align-center">
              <v-icon
                style="font-size:18px"
                class="text-xs-center icon ml-1"
                :style="['HomeViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
                color="grey lighten-5"
                v-html="'fas fa-columns'"
              />
            </v-list-tile-action>

            <v-list-tile-content class="mx-0">
              <v-list-tile-title
                :style="['HomeViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
                class="grey--text text--lighten-5 body-2"
                v-text="'Dashboard'"
              />
            </v-list-tile-content>

            <v-btn
              v-if="!miniVariant"
              class="minify-button mr-0 mb-2"
              icon
              @click.stop="miniVariant = !miniVariant"
            >
              <v-icon
                class="icon text-xs-right"
                :style="['HomeViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
                color="grey lighten-4"
              >{{miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'}}</v-icon>
            </v-btn>
          </v-list-tile>
        </v-list>
      </v-layout>
    </v-navigation-drawer>
    <Header :title="title" />
    <v-content>
      <keep-alive>
        <component :is="currentComponentRendered" />
      </keep-alive>
    </v-content>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./Header";

export default {
  name: "Dashboard",
  components: {
    Header
  },
  data() {
    return {
      title: "NC News",
      miniVariant: false
    };
  },
  computed: {
    ...mapGetters(["currentComponentRendered"])
  }
};
</script>

<style lang="scss" scoped>
</style>