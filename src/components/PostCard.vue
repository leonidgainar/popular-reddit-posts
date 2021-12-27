<template>
  <div
    class="flex flex-col md:flex-row overflow-hidden bg-white rounded-md shadow-md mt-4 mx-4 w-full h-full"
  >
    <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
      <h3 class="font-semibold text-lg">{{ title }}</h3>
      <div>
        <font-awesome-icon class="mx-2" icon="thumbs-up" /> {{ upvotes }}
        <font-awesome-icon class="mx-2" icon="smile" />{{
          upvoteRatioPercentage
        }}
        <font-awesome-icon class="mx-2" icon="comments" />{{ comments }}
        <p class="text-sm text-gray-700 uppercase font-semibold mt-2">
          {{ author }} &bull; {{ created }}
        </p>
        <a
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mt-4"
          :href="url"
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
      type: String,
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

  components: {
    FontAwesomeIcon
  },

  computed: {
    upvoteRatioPercentage() {
      return `${this.upvoteRatio * 100} %`;
    }
  }
};
</script>
