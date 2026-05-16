<script setup>
import ProjectItem from "../components/ProjectsPage/ProjectItem.vue";
import { PROJECT_IMAGES } from "../constants/projectImages";
import { useLanguage } from "../composables/useLanguage.js";
import { computed } from "vue";

const { t } = useLanguage();

const projectImages = [
  [PROJECT_IMAGES.directamPanel],
  [PROJECT_IMAGES.crm1, PROJECT_IMAGES.crm2, PROJECT_IMAGES.crm3],
  [PROJECT_IMAGES.dmPlus],
];

const projectUrls = [
  "https://directam.chatbooster.io",
  undefined,
  "https://dmplus.manymessage.com/",
];

const projects = computed(() =>
  t.value.projects.map((p, i) => ({
    ...p,
    images: projectImages[i],
    url: projectUrls[i],
  }))
);
</script>

<template>
  <div class="tw-flex tw-flex-col tw-gap-10">
    <ProjectItem
      v-for="project in projects"
      :key="project.name"
      :project="project"
    />
  </div>
</template>
