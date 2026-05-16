<script setup>
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const containerRef = ref(null);

useMotion(containerRef, {
  initial: {
    opacity: 0,
    y: 24,
  },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      delay: 200,
    },
  },
});
</script>

<template>
  <div
    class="job-card tw-w-full md:tw-w-[90%] tw-mx-auto tw-bg-theme-gray-800 tw-rounded-[40px] tw-py-10 md:tw-py-14 tw-px-5 md:tw-px-16 tw-flex tw-flex-col tw-gap-12 md:tw-flex-row md:tw-gap-6"
    dir="rtl"
    ref="containerRef"
  >
    <div class="tw-flex tw-flex-col tw-gap-2 tw-text-nowrap md:tw-flex-[2.5]">
      <h3 class="tw-font-medium tw-text-lg tw-text-wrap">
        {{ job.jobTitle }}
      </h3>
      <p class="tw-text-theme-purple-500 tw-font-normal">{{ job.jobType }}</p>
      <div
        class="tw-flex tw-items-center tw-gap-2 tw-text-[#717171] tw-font-light tw-text-sm"
      >
        <p>{{ job.startDate }}</p>
        <div class="status-dot tw-w-2 tw-h-2 tw-bg-theme-green-500 tw-rounded-full"></div>
        <p>{{ job.endDate }}</p>
      </div>
      <p class="tw-text-[#717171] tw-font-light tw-text-sm">
        {{ job.address }} - {{ job.city }}
      </p>
    </div>

    <div class="tw-flex tw-flex-col tw-gap-5 tw-flex-[10]">
      <h2 class="tw-text-theme-purple-500 tw-font-semibold tw-text-xl">
        {{ job.companyName }}
      </h2>
      <p class="tw-font-light tw-text-theme-gray-400 md:tw-pl-16">
        {{ job.desc }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes dot-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(95, 185, 176, 0.5); }
  50% { box-shadow: 0 0 0 5px rgba(95, 185, 176, 0); }
}

.job-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 1px solid transparent;
}

.job-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(178, 146, 255, 0.18);
}

.status-dot {
  animation: dot-pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}
</style>
