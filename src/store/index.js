import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  //this protery will be the component imported object, not the component name
  currentComponentRendered: {},
  showTopic: false
};

const mutations = {
  SET_CURRENT_COMPONENT(state, payload) {
    state.currentComponentRendered = payload;
  },
  SET_TOPIC(state, payload) {
    state.showTopic = payload;
  }
};

const actions = {
  getCurrentComponent({ commit }, payload) {
    commit("SET_CURRENT_COMPONENT", payload);
  },
  setTopic({ commit }, payload) {
    commit("SET_TOPIC", payload);
  }
};

const getters = {
  currentComponentRendered: state => state.currentComponentRendered,
  showTopic: state => state.showTopic
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
