<script setup>
import TechIcons from "../../constants/TechIcons";
import XPYears from "./XPYears.vue";
import TechsCarousel from "./TechsCarousel.vue";

const techs = [
  { title: "JavaScript", icon: TechIcons.JavaScript, bgColor: "#C3C99E" },
  { title: "React", icon: TechIcons.react, bgColor: "#7D9CA5" },
  { title: "Vue", icon: TechIcons.vue, bgColor: "#86C8AC " },
  { title: "Tailwind", icon: TechIcons.tailwind, bgColor: "#90a1b9" },
];
</script>

<template>
  <div class="tw-flex tw-w-full tw-justify-center tw-items-center">
    <XPYears />
  </div>
  <TechsCarousel :techs="techs" />
</template>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}
</style>
