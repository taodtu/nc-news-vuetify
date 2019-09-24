import { getArticles } from "../../../api";

const state = {
  articles: {}
};

const mutations = {
  GET_ARTICLES(state, payload) {
    state.articles = payload;
  }
};

const actions = {
  getArticles({ commit }, payload) {
    getArticles(payload).then(({ articles }) =>
      commit("GET_ARTICLES", articles)
    );
  }
};

const getters = {
  articles: state => state.articles
};

export default {
  state,
  mutations,
  actions,
  getters
};
