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
    width="160"
    dark
  >
    <v-layout column fill-height>
      <v-list class="transparent pr-0 px-0 d-flex-row">
        <v-list-item name="show-hide" class="my-0 py-0">
          <v-switch class="my-0 py-0" v-model="miniVariant" color="yellow lighten-4" />
        </v-list-item>

        <v-list-item
          class="text-xs-middle mx-0 px-0"
          dark
          value="true"
          :style="['HomeViewer' === currentModuleName ? {'background': '#e6b400'} : {}]"
          @click="importComponent('Home'), hideTopics()"
        >
          <v-row no-gutters align="center" align-content="start">
            <v-col cols="3">
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
            <v-col cols="9">
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
          @click="importComponent('User'), hideTopics()"
        >
          <v-row no-gutters align="center" align-content="start">
            <v-col cols="3">
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
            <v-col cols="9">
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

        <v-list-item
          class="text-xs-middle mx-0 px-0"
          dark
          value="true"
          :style="['TopicViewer' === currentModuleName ? {'background': '#e6b400'} : {}]"
          @click="importComponent('Topic'), setTopic()"
        >
          <v-row no-gutters align="center" align-content="start">
            <v-col cols="3">
              <v-list-item-action class="align-center">
                <v-icon
                  style="font-size:18px"
                  class="text-xs-center icon ml-3"
                  color="grey lighten-5"
                >{{showTopic ?'fas fa-angle-double-down':'fas fa-angle-double-right'}}</v-icon>
              </v-list-item-action>
            </v-col>
            <v-col cols="9">
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
              <v-col cols="3">
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
              <v-col cols="9">
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
        <v-divider></v-divider>
        <v-list-item class="mt-8">
          <UserBar />
        </v-list-item>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import UserBar from "./UserBar";

export default {
  name: "Navigation",
  components: {
    UserBar
  },
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
    },
    setTopic() {
      this.$store.dispatch("setTopic", !this.showTopic);
    },
    hideTopics() {
      this.$store.dispatch("setTopic", false);
    }
  }
};
</script>