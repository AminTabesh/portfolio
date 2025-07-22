<script setup lang="ts">
import DetailedTechCard from "./DetailedTechCard.vue";
import TechIcons from "../../constants/TechIcons";
import DetailedTechCarousel from "./DetailedTechCarousel.vue";
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";

const techGroups = [
  {
    title: "Front-end Frameworks",
    techs: [
      { title: "vue.js", icon: TechIcons.vue },
      { title: "React.js", icon: TechIcons.react },
      { title: "React Native", icon: TechIcons.reactNative },
    ],
  },
  {
    title: "Languages",
    techs: [
      { title: "JavaScript", icon: TechIcons.JavaScript },
      { title: "TypeScript", icon: TechIcons.typeScript },
    ],
  },
  {
    title: "Styling",
    techs: [
      { title: "Tailwind", icon: TechIcons.tailwind },
      { title: "Vuetify", icon: TechIcons.Vuetify },
      { title: "NativeWind", icon: TechIcons.nativeWind },
      { title: "Styled Components", icon: TechIcons.styledComponents },
    ],
  },
  {
    title: "State Management",
    techs: [
      { title: "Vuex", icon: TechIcons.vuex },
      { title: "Redux", icon: TechIcons.redux },
    ],
  },
  {
    title: "Data Fetching",
    techs: [
      { title: "Tanstack Query", icon: TechIcons.tanstackQuery },
      { title: "axios", icon: TechIcons.axios },
    ],
  },
  {
    title: "Others",
    techs: [
      { title: "Expo", icon: TechIcons.expo },
      { title: "React Router", icon: TechIcons.reactRouter },
      { title: "Vue Router", icon: TechIcons.vueRouter },
      { title: "React Navigation", icon: TechIcons.reactNavigation },
    ],
  },
];

// Animation refs
const line1 = ref(null);
const line2 = ref(null);
const line3 = ref(null);
const carousel = ref(null);

// Animate when mounted
onMounted(() => {
  // Header text animations (sequential)
  useMotion(line1, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 200,
      },
    },
  });

  useMotion(line2, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 400,
      },
    },
  });

  useMotion(line3, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 600,
      },
    },
  });

  // Carousel animation
  useMotion(carousel, {
    initial: { opacity: 0, y: 50 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 800,
      },
    },
  });
});
</script>

<template>
  <div>
    <div class="tw-text-center tw-font-thin tw-text-2xl" dir="rtl">
      <p ref="line1">تا حالا</p>
      <p ref="line2">تجربه کار با این تکنولوژی ها</p>
      <p ref="line3">رو بدست آوردم:</p>
    </div>
    <div ref="carousel">
      <DetailedTechCarousel :techs="techGroups" />
    </div>
  </div>
</template>

<style></style>
