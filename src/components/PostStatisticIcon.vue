<template>
  <font-awesome-icon class="mx-2" :icon="icon" />
  <span class="cursor-default" :title="title">{{ value }}</span>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon
  },

  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    value: {
      type: Number,
      required: true
    }
  }
};
</script>
