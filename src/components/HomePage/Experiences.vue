<script setup>
import TechIcons from "../../constants/TechIcons";
import XPYears from "./XPYears.vue";
import TechsCarousel from "./TechsCarousel.vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const techs = [
  { title: "JavaScript", icon: TechIcons.JavaScript, bgColor: "#C3C99E" },
  { title: "React", icon: TechIcons.react, bgColor: "#7D9CA5" },
  { title: "Vue", icon: TechIcons.vue, bgColor: "#86C8AC " },
  { title: "Tailwind", icon: TechIcons.tailwind, bgColor: "#90a1b9" },
];

const xpYearsRef = ref(null);
const carouselContainerRef = ref(null);

// Animation for XPYears - will only run once
const { stop: stopXPObserver } = useIntersectionObserver(
  xpYearsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      useMotion(xpYearsRef, {
        initial: { opacity: 0, y: 50 },
        enter: {  // Changed from visibleOnce to enter
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
      stopXPObserver(); // Stop observing after first trigger
    }
  }
);

// Animation for Carousel - will only run once
const { stop: stopCarouselObserver } = useIntersectionObserver(
  carouselContainerRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      useMotion(carouselContainerRef, {
        initial: { opacity: 0 },
        enter: {  // Changed from visibleOnce to enter
          opacity: 1,
          transition: {
            duration: 600,
            delay: 400,
          },
        },
      });
      stopCarouselObserver(); // Stop observing after first trigger
    }
  }
);
</script>

<template>
  <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-items-center">
    <div
      ref="xpYearsRef"
      class="tw-flex tw-w-full tw-justify-center tw-items-center md:tw-mb-10"
    >
      <XPYears />
    </div>
    <div ref="carouselContainerRef" class="tw-w-full">
      <TechsCarousel :techs="techs" />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}
</style>