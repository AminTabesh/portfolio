<script setup>
const props = defineProps({
  isTransparent: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="{
      'non-transparent-btn': !isTransparent,
      'transparent-btn': isTransparent,
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.non-transparent-btn {
  @apply tw-bg-white tw-text-theme-gray-900 tw-px-4 tw-py-2 tw-rounded-full tw-transition-colors hover:tw-bg-theme-gray-300;
}

.transparent-btn {
    @apply tw-text-theme-purple-500 tw-transition-colors hover:tw-text-purple-400
}
</style>
