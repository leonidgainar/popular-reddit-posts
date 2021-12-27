import postsService from "../../services/postsService";

const state = () => ({
  posts: []
});

const getters = {
  posts: (state) => {
    return state.posts;
  }
};

const actions = {
  getPosts({ commit }) {
    postsService.fetchRedditPosts().then((posts) => {
      commit("setPosts", posts);
    });
  }
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
