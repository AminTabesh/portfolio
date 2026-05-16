<script setup lang="ts">
import ExpTopPart from "../components/ExperiencesPage/ExpTopPart.vue";
import JobCard from "../components/ExperiencesPage/JobCard.vue";
import { useLanguage } from "../composables/useLanguage.js";
import { computed } from "vue";

const { t } = useLanguage();
const jobs = computed(() => t.value.jobs);
</script>

<template>
  <div>
    <ExpTopPart />
    <div class="tw-flex tw-flex-col tw-gap-6">
      <JobCard
        v-for="(job, index) in jobs"
        :key="index"
        :job="job"
        class="tw-z-10"
      />
    </div>
  </div>
</template>
