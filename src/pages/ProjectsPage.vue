<script setup>
import ProjectItem from "../components/ProjectsPage/ProjectItem.vue";
import { PROJECT_IMAGES } from "../constants/projectImages";

const projects = [
  {
    name: "پنل دایرکتم",
    employer: "دایرکتم",
    date: "1403-1404",
    images: [PROJECT_IMAGES.directamPanel],
    url: "https://directam.chatbooster.io",
  },
  {
    name: "سی آر ام دایرکتم",
    employer: "دایرکتم",
    date: "1403-1404",
    images: [PROJECT_IMAGES.crm1, PROJECT_IMAGES.crm2, PROJECT_IMAGES.crm3],
  },
  {
    name: "دی ام پلاس",
    employer: "دایرکتم",
    date: "1403-1404",
    images: [PROJECT_IMAGES.dmPlus],
    url: "https://dmplus.manymessage.com/",
  },
];
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
