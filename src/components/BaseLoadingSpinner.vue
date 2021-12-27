<template>
  <div v-if="isLoading" class="flex justify-center w-full px-4 md:px-10">
    <div
      class="flex bg-white rounded-md shadow-lg items-center justify-center w-full h-40"
    >
      <div
        style="border-top-color: transparent"
        class="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"
      ></div>
      <div class="ml-2">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: "Loading, please wait..."
    }
  }
};
</script>
