<template>
  <div
    class="flex flex-col md:flex-row overflow-hidden bg-white rounded-md shadow-md w-full h-full"
  >
    <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
      <h3 class="font-semibold text-lg">{{ title }}</h3>
      <div>
        <p class="text-sm text-gray-700 uppercase font-semibold mt-2">
          <span class="cursor-default" title="Author">{{ author }}</span> &bull;
          <span class="cursor-default" title="Created date">
            {{ formattedCreatedDate }}
          </span>
        </p>
        <div class="mt-2">
          <font-awesome-icon class="mx-2" icon="thumbs-up" />
          <span class="cursor-default" title="Up votes">{{ upvotes }}</span>
          <font-awesome-icon class="mx-2" icon="percentage" />
          <span class="cursor-default" title="Percentage of up votes">
            {{ upvoteRatioPercentage }}
          </span>
          <font-awesome-icon class="mx-2" icon="comments" />
          <span class="cursor-default" title="Number of comments">
            {{ comments }}
          </span>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon
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

  computed: {
    upvoteRatioPercentage() {
      return this.upvoteRatio * 100;
    },

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
