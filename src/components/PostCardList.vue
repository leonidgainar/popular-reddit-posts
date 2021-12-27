<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
    <div v-for="(post, index) in posts" :key="index">
      <PostCard
        v-bind="{
          title: post.title,
          author: post.author,
          created: post.created,
          upvotes: post.upvotes,
          upvoteRatio: post.upvoteRatio,
          comments: post.comments,
          url: post.url
        }"
      />
    </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PostCard
  },

  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
};
</script>
