<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { useMotion } from "@vueuse/motion";
import ImageWithSkeleton from "./ImageWithSkeleton.vue";
import ImageModal from "./ImageModal.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const containerRef = ref(null);
const modalOpen = ref(false);
const modalIndex = ref(0);

useMotion(containerRef, {
  initial: { opacity: 0, y: 24 },
  visibleOnce: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15, delay: 200 },
  },
});

function openModal(index) {
  modalIndex.value = index;
  modalOpen.value = true;
}
</script>

<template>
  <div
    class="project-card tw-w-full tw-h-auto md:tw-h-[320px] tw-rounded-[40px] tw-flex tw-flex-col md:tw-flex-row tw-gap-5 tw-p-6 md:tw-p-8 overflow-hidden"
    ref="containerRef"
  >
    <div class="tw-flex tw-flex-col tw-gap-3 md:tw-w-1/2 md:tw-justify-center">
      <a
        class="tw-text-xl tw-cursor-pointer hover:tw-text-theme-purple-500 tw-transition-colors"
        :href="project.url"
        target="_blank"
      >{{ project.name }}</a>
      <p class="tw-text-theme-purple-500 tw-text-sm">{{ project.employer }}</p>
      <p class="tw-text-theme-gray-400 tw-text-xs">{{ project.date }}</p>
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
            <ImageWithSkeleton
              :src="image"
              :alt="`project image ${index + 1}`"
              @click="openModal(index)"
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

  <ImageModal
    v-model="modalOpen"
    v-model:currentIndex="modalIndex"
    :images="project.images"
  />
</template>

<style scoped>
.project-card {
  border: 1px solid var(--project-border);
  transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.project-card:hover {
  border-color: var(--card-hover-border) !important;
  box-shadow:
    0 0 40px var(--card-hover-shadow-1),
    0 10px 30px var(--card-hover-shadow-2);
  transform: translateY(-5px);
}

.carousel__item { padding: 0 2px; }
.carousel__prev { right: auto; left: 10px; }
.carousel__next { left: auto; right: 10px; }
.carousel__pagination { display: none; }

@media (max-width: 767px) {
  .carousel__item { height: 180px; }
}
</style>
