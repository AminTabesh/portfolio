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
  <div class="tw-flex tw-items-center tw-gap-2">
    <div class="tw-w-[35px] tw-h-[35px] tw-rounded-full tw-bg-[#211F23] tw-flex tw-justify-center tw-items-center">
      <img :src="icon" :alt="title" class="tw-w-[16px]" />
    </div>
    <p>{{ title }}</p>
  </div>
</template>
