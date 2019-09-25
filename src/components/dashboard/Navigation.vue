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
    dark
  >
    <v-layout column fill-height>
      <v-list class="transparent pr-0 px-0">
        <v-list-item name="show-hide" class="my-0 py-0">
          <v-switch class="my-0 py-0" v-model="miniVariant" color="yellow lighten-4" />
        </v-list-item>

        <v-list-item
          class="text-xs-middle mx-0 px-0"
          dark
          value="true"
          :style="['HomeViewer' === currentModuleName ? {'background': '#e6b400'} : {}]"
          @click="setCurrentComponent('Home')"
        >
          <v-row no-gutters align="center" align-content="start">
            <v-col cols="2">
              <v-list-item-action class="align-center">
                <v-icon
                  style="font-size:18px"
                  class="text-xs-center icon ml-3"
                  :style="['HomeViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
                  color="grey lighten-5"
                  v-html="'fas fa-home'"
                />
              </v-list-item-action>
            </v-col>
            <v-col cols="10">
              <v-list-item-content class="ml-4">
                <v-list-item-title
                  :style="['HomeViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
                  class="white--text text--lighten-5 body-2"
                  v-text="'Dashboard'"
                />
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>

        <v-list-item
          class="text-xs-middle mx-0 px-0"
          dark
          value="true"
          :style="['UserViewer' === currentModuleName ? {'background': '#e6b400'} : {}]"
          @click="importComponent('User')"
        >
          <v-row no-gutters align="center" align-content="start">
            <v-col cols="2">
              <v-list-item-action class="align-center">
                <v-icon
                  style="font-size:18px"
                  class="text-xs-center icon ml-3"
                  :style="['UserViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
                  color="grey lighten-5"
                  v-html="'fas fa-user'"
                />
              </v-list-item-action>
            </v-col>
            <v-col cols="10">
              <v-list-item-content class="ml-4">
                <v-list-item-title
                  :style="['UserViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
                  class="white--text text--lighten-5 body-2"
                  v-text="'User'"
                />
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>

        <v-divider v-if="showTopic"></v-divider>

        <v-list-item v-if="showTopic" class="text-xs-middle mx-0 px-0" dark>
          <v-row no-gutters align="center" align-content="start">
            <v-col cols="2">
              <v-list-item-action class="align-center">
                <v-icon
                  style="font-size:18px"
                  class="text-xs-center icon ml-3"
                  color="grey lighten-5"
                  v-html="'fas fa-angle-double-down'"
                />
              </v-list-item-action>
            </v-col>
            <v-col cols="10">
              <v-list-item-content class="ml-4">
                <v-list-item-title class="white--text text--lighten-5 body-2" v-text="'Topics'" />
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>

        <div v-if="showTopic">
          <v-list-item
            v-for="topic in topics"
            :key="topic.slug"
            class="text-xs-middle mx-0 px-0"
            dark
            value="true"
            :style="[`${topic.slug}Viewer` === currentModuleName ? {'background': '#e6b400'} : {}]"
            @click="importComponent(topic.slug)"
          >
            <v-row no-gutters align="center" align-content="start">
              <v-col cols="2">
                <v-list-item-action class="align-center">
                  <v-icon
                    style="font-size:18px"
                    class="text-xs-center icon ml-3"
                    :style="['UserViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
                    color="grey lighten-5"
                    v-html="topic.icon"
                  />
                </v-list-item-action>
              </v-col>
              <v-col cols="10">
                <v-list-item-content class="mx-4">
                  <v-list-item-title
                    :style="['UserViewer' === currentModuleName ? {'color': '#383838 !important'} : {}]"
                    class="white--text text--lighten-5 body-2"
                    v-text="topic.slug"
                  />
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-list-item>
        </div>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Navigation",
  data() {
    return {
      miniVariant: false
    };
  },
  computed: {
    ...mapGetters(["currentComponentRendered", "showTopic", "topics"]),
    currentModuleName() {
      return this.currentComponentRendered.name;
    }
  },
  methods: {
    importComponent(name) {
      this.$store.dispatch("importComponent", name);
    }
  }
};
</script>