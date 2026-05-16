<script setup lang="ts">
import TechItem from './TechItem.vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    techs: {
        type: Array,
        required: true
    }
})
</script>

<template>
  <div class="tech-detail-card-outer tw-min-w-[98%] tw-rounded-[13px] tw-p-[1px]">
    <div class="tw-w-full tw-h-full tw-bg-theme-gray-800 tw-rounded-[12px] tw-px-4 tw-py-6 tw-font-raleway">
      <h2 class="tw-text-left tw-text-sm tw-font-medium tw-text-theme-gray-400">{{ title + ':' }}</h2>
      <div class="tw-mt-4 tw-flex tw-flex-col tw-gap-2">
          <TechItem v-for="tech in techs" :key="tech.title" v-bind="tech"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-detail-card-outer {
  background: var(--detail-card-bg);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, background 0.3s ease;
  cursor: default;
}

.tech-detail-card-outer:hover {
  transform: translateY(-6px);
  background: var(--detail-card-hover-bg);
  box-shadow:
    0 12px 40px var(--detail-card-hover-shadow),
    0 4px 16px var(--detail-card-hover-deep);
}
</style>
