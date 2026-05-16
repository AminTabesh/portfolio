<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="tech-item tw-flex tw-items-center tw-gap-2">
    <div class="tech-icon-bg tw-w-[35px] tw-h-[35px] tw-rounded-full tw-bg-[#211F23] tw-flex tw-justify-center tw-items-center">
      <img :src="icon" :alt="title" class="tw-w-[16px]" />
    </div>
    <p class="tw-text-sm tw-transition-colors tw-duration-200">{{ title }}</p>
  </div>
</template>

<style scoped>
.tech-item {
  transition: transform 0.2s ease;
}

.tech-item:hover {
  transform: translateX(-4px);
}

.tech-icon-bg {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease;
  flex-shrink: 0;
}

.tech-item:hover .tech-icon-bg {
  transform: scale(1.2) rotate(10deg);
  background: rgba(178, 146, 255, 0.15);
}
</style>
