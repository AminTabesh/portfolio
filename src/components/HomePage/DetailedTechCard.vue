<script setup lang="ts">
import TechItem from './TechItem.vue';
import TechIcons from '../../constants/TechIcons';
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
  <div
    class="tw-min-w-[98%] tw-bg-[linear-gradient(180deg,rgba(35,35,35,1)_0%,rgba(67,67,67,1)_49%,rgba(35,35,35,1)_100%)] tw-rounded-[12px] tw-p-[1px]"
  >
  <div class="tw-w-full tw-h-full tw-bg-theme-gray-900 tw-rounded-[12px] tw-px-4 tw-py-6 tw-font-raleway">
    <h2 class="tw-text-left">{{ title + ':' }}</h2>
    <div class="tw-mt-4 tw-flex tw-flex-col tw-gap-2">
        <TechItem v-for="tech in techs" :key="tech.title" v-bind="tech"/>
    </div>
  </div>
  </div>
</template>
