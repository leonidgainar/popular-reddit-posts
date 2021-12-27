<template>
  <div
    class="flex flex-col md:flex-row overflow-hidden bg-white rounded-md shadow-md w-full h-full"
  >
    <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
      <h3 class="font-semibold text-lg">{{ title }}</h3>
      <div>
        <div class="text-sm text-gray-700 uppercase font-semibold mt-2 py-2">
          <span class="cursor-default" title="Author">{{ author }}</span> &bull;
          <span class="cursor-default" title="Created date">
            {{ formattedCreatedDate }}
          </span>
        </div>
        <div class="py-2">
          <template
            v-for="(postStatistic, index) in postStatistics"
            :key="index"
          >
            <PostStatisticIcon
              :icon="postStatistic.icon"
              :title="postStatistic.title"
              :value="postStatistic.value"
            />
          </template>
        </div>
        <a
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mt-4"
          :href="fullPostUrl"
          target="_blank"
        >
          View post
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import PostStatisticIcon from "../components/PostStatisticIcon.vue";

export default {
  components: {
    PostStatisticIcon
  },

  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    created: {
      type: Number,
      required: true
    },
    upvotes: {
      type: Number
    },
    upvoteRatio: {
      type: Number
    },
    comments: {
      type: Number
    },
    url: {
      type: String
    }
  },

  data() {
    return {
      postStatistics: [
        {
          icon: "thumbs-up",
          title: "Up votes",
          value: this.upvotes
        },
        {
          icon: "percentage",
          title: "Percentage of up votes",
          value: this.upvoteRatio * 100
        },
        {
          icon: "comments",
          title: "Number of comments",
          value: this.comments
        }
      ]
    };
  },

  computed: {
    fullPostUrl() {
      return `https://www.reddit.com${this.url}`;
    },

    formattedCreatedDate() {
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
        timeStyle: "short"
      }).format(this.created * 1000);
    }
  }
};
</script>
