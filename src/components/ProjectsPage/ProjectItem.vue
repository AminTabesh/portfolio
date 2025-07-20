<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { useMotion } from "@vueuse/motion";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const containerRef = ref(null);

useMotion(containerRef, {
  initial: {
    opacity: 0,
    y: 20,
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
    class="tw-w-full tw-h-auto md:tw-h-[320px] tw-rounded-[40px] tw-border tw-border-[#232323] tw-flex tw-flex-col md:tw-flex-row tw-gap-5 tw-p-6 md:tw-p-8 overflow-hidden"
    dir="rtl"
    ref="containerRef"
  >
    <div class="tw-flex tw-flex-col tw-gap-3 md:tw-w-1/2 md:tw-justify-center">
      <a
        class="tw-text-xl tw-cursor-pointer hover:tw-text-theme-purple-500 tw-transition-colors"
        :href="project.url"
        target="_blank"
        >{{ project.name }}</a
      >
      <p class="tw-text-theme-purple-500 tw-text-sm">
        {{ project.employer }}
      </p>
      <p class="tw-text-[#717171] tw-text-xs">
        {{ project.date }}
      </p>
    </div>

    <div class="md:tw-w-1/2 tw-h-full">
      <Carousel
        :items-to-show="1"
        :wrap-around="true"
        :rtl="true"
        class="tw-h-full tw-rounded-xl tw-overflow-hidden"
      >
        <Slide v-for="(image, index) in project.images" :key="index">
          <div class="carousel__item tw-h-[200px] md:tw-h-[280px]">
            <img
              :src="image"
              :alt="`project image ${index + 1}`"
              class="tw-w-full tw-h-full tw-object-contain"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
.carousel__item {
  padding: 0 2px;
}

.carousel__prev {
  right: auto;
  left: 10px;
}

.carousel__next {
  left: auto;
  right: 10px;
}

.carousel__pagination {
  display: none;
}

@media (max-width: 767px) {
  .carousel__item {
    height: 180px;
  }
}
</style>