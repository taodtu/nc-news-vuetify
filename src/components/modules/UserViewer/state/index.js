import { getUser } from "../../../api";

const state = {
  user: "jessjelly",
  author: {},
  authors: []
};

const mutations = {
  UPDATE_USER(state, payload) {
    state.user = payload;
  },
  GET_AUTHOR(state, payload) {
    state.author = payload;
  },
  ADD_USER(state, payload) {
    state.authors = payload;
  }
};

const actions = {
  updateUser({ commit }, payload) {
    commit("UPDATE_USER", payload);
  },
  getAuthor({ commit }, username) {
    getUser(username).then(author => commit("GET_AUTHOR", author));
  },
  getAuthors({ commit }, payload) {
    let res = [];
    payload.forEach(username => {
      getUser(username)
        .then(author => {
          res.push(author);
          return res;
        })
        .then(res => commit("ADD_USER", res));
    });
  }
};

const getters = {
  user: state => state.user,
  author: state => state.author,
  authors: state => state.authors
};

export default {
  state,
  mutations,
  actions,
  getters
};
