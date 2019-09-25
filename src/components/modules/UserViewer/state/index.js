import { getUser } from "../../../api";

const state = {
  author: {},
  authors: []
};

const mutations = {
  GET_AUTHOR(state, payload) {
    state.author = payload;
  },
  ADD_USER(state, payload) {
    state.authors = payload;
  }
};

const actions = {
  getAuthor({ commit }, username) {
    getUser(username).then(author => commit("GET_AUTHOR", author));
  },
  async getAuthors({ commit }, payload) {
    let res = await Promise.all(payload.map(username => getUser(username)));
    commit("ADD_USER", res);
  }
};

const getters = {
  author: state => state.author,
  authors: state => state.authors
};

export default {
  state,
  mutations,
  actions,
  getters
};
