<template>
  <h1 class="text-3xl font-bold py-4">Popular Reddit Posts</h1>
  <div class="flex justify-between mx-4 py-4">
    <h3 class="font-semibold text-lg">Posts fetched on: {{ fetchDate }}</h3>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4"
      @click="getPosts"
    >
      Refresh posts
      <font-awesome-icon class="ml-2" icon="sync" />
    </button>
  </div>
  <div v-if="isLoading" class="flex items-center justify-center">
    <div
      style="border-top-color: transparent"
      class="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"
    ></div>
    <div class="ml-2">Fetching posts from Reddit API, please wait...</div>
  </div>
  <PostCardList v-else :posts="posts" />
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("posts");
import PostCardList from "../components/PostCardList.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    PostCardList,
    FontAwesomeIcon
  },

  created() {
    if (!this.posts.length) {
      this.getPosts();
    }
  },

  computed: {
    ...mapGetters(["posts", "fetchDate"]),

    isLoading() {
      return !this.posts.length;
    }
  },

  methods: {
    ...mapActions(["getPosts"])
  }
};
</script>

<style scoped></style>
