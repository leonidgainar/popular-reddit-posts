<template>
  <font-awesome-icon class="mx-2" :icon="icon" />
  <span class="cursor-default" :title="title">{{ value }}</span>
</template>

<script>
export default {
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
