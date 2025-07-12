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
    class="tw-min-w-[220px] tw-min-h-[190px] tw-px-6 tw-rounded-[60px] tw-flex tw-flex-1 tw-flex-col tw-items-start tw-justify-center tw-gap-3 tw-font-raleway"
    :style="{ backgroundColor: bgColor }"
  >
    <img :src="icon" alt="experience-logo" class="tw-w-[52px]" />
    <p class="tw-font-bold tw-text-[#272727]">{{ title }}</p>
  </div>
</template>
