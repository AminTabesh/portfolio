<script setup>
import { ref } from "vue";

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "" },
});

defineEmits(["click"]);

const loaded = ref(false);
</script>

<template>
  <div class="tw-relative tw-w-full tw-h-full">
    <div v-if="!loaded" class="tw-absolute tw-inset-0 tw-rounded-xl skeleton" />
    <img
      :src="src"
      :alt="alt"
      class="tw-w-full tw-h-full tw-object-contain tw-cursor-zoom-in zoomable-img"
      :class="loaded ? 'tw-opacity-100' : 'tw-opacity-0'"
      @load="loaded = true"
      @click="$emit('click')"
    />
  </div>
</template>

<style scoped>
.skeleton {
  background: linear-gradient(90deg, #1c1c1c 25%, #272727 50%, #1c1c1c 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.zoomable-img {
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.zoomable-img:hover {
  transform: scale(1.04);
}
</style>
