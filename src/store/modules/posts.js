import postsService from "../../services/postsService";
import { useToast } from "vue-toastification";

const toast = useToast();

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
    postsService
      .fetchRedditPosts()
      .then((posts) => {
        if (posts) {
          commit("setPosts", posts);
          commit("setFetchDate");
        }
      })
      .catch((error) => {
        toast.error(`Error on fetching API: ${error.message}`);
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
