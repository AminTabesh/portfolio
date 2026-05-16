<script setup>
const props = defineProps({
  icon: {
    type: String,
    requried: true,
  },
  bgColor: {
    type: String,
    default: "#C3C99E",
  },
  title: {
    type: String,
    default: "Title",
  },
});
</script>

<template>
  <div
    class="tech-card tw-w-full tw-min-h-[190px] tw-px-6 tw-rounded-[60px] tw-flex tw-flex-shrink-0 tw-flex-grow-0 tw-flex-col tw-items-start tw-justify-center tw-gap-3 tw-font-raleway"
    :style="{ backgroundColor: bgColor }"
  >
    <img :src="icon" alt="experience-logo" class="tw-w-[52px] tech-card-icon" />
    <p class="tw-font-bold tw-text-[#272727]">{{ title }}</p>
  </div>
</template>

<style scoped>
.tech-card {
  cursor: default;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.tech-card-icon {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tech-card:hover .tech-card-icon {
  transform: scale(1.15) rotate(-8deg);
}
</style>
