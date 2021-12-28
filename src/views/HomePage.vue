<template>
  <h1 class="text-3xl font-bold py-4">Popular Reddit Posts</h1>
  <div class="flex justify-between mx-4 py-4">
    <h2 class="font-semibold text-lg">Posts fetched on: {{ fetchDate }}</h2>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4"
      @click="getPosts"
    >
      Refresh posts
      <font-awesome-icon class="ml-2" icon="sync" />
    </button>
  </div>
  <BaseLoadingSpinner
    :isLoading="isLoading"
    message="Fetching posts from Reddit API, please wait..."
  />
  <PostCardList :posts="posts" />
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("posts");

import PostCardList from "../components/PostCardList.vue";
import BaseLoadingSpinner from "../components/BaseLoadingSpinner.vue";

export default {
  components: {
    PostCardList,
    BaseLoadingSpinner
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
