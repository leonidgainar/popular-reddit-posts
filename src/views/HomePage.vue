<template>
  <h1 class="text-3xl font-bold py-4">Popular Reddit Posts</h1>
  <div class="flex justify-end mx-4 py-4">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4"
      @click="getPosts"
    >
      Refresh posts
      <font-awesome-icon class="ml-2" icon="sync" />
    </button>
  </div>
  <PostCardList :posts="posts" />
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
    ...mapGetters(["posts"])
  },
  methods: {
    ...mapActions(["getPosts"])
  }
};
</script>

<style scoped></style>
