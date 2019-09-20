import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentComponentRendered:"",
};

const mutations = {
    SET_CURRENT_COMPONENT(state, payload){
        state.currentComponentRendered=payload
    }
};

const actions ={
    getCurrentComponent({commit}, payload){
        commit("SET_CURRENT_COMPONENT", payload);
    }
};

const getters ={
    currentComponentRendered: state=>state.currentComponentRendered
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});