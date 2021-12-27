import postsService from "../../services/postsService";

const state = () => ({
  posts: [],
  fetchDate: null
});

const getters = {
  posts: (state) => {
    return state.posts;
  },
  fetchDate: (state) => {
    return state.fetchDate;
  }
};

const actions = {
  getPosts({ commit }) {
    postsService.fetchRedditPosts().then((posts) => {
      commit("setPosts", posts);
      commit("setFetchDate");
    });
  }
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setFetchDate(state) {
    state.fetchDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(Date.now());
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
