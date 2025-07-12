<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { Pagination as CarouselPagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import DetailedTechCard from "./DetailedTechCard.vue";

const props = defineProps({
  techs: {
    type: Array,
    required: true,
  },
});

const carousel = ref(null);

const carouselConfig = {
  itemsToShow: 1.2, // Slightly more than 1 for peek effect
  wrapAround: true,
  snapAlign: "center",
  transition: 500,
  mouseDrag: true,
  gap: 12,
  touchDrag: true,
  breakpoints: {
    640: {
      itemsToShow: 1.5,
      snapAlign: "center",
    },
    768: {
      itemsToShow: 2.1,
      snapAlign: "center",
    },
    1024: {
      itemsToShow: 3,
      snapAlign: "center",
      gap: 50,
    },
  },
};
</script>

<template>
  <div class="tw-mt-10 tw-px-4">
    <Carousel ref="carousel" v-bind="carouselConfig">
      <Slide v-for="(tech, index) in techs" :key="index">
        <div class="carousel__item tw-flex tw-justify-center">
          <DetailedTechCard v-bind="tech" class="tw-mx-1 tw-flex-shrink-0" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style>
/* Fix for vue3-carousel centering */
.carousel__viewport {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.carousel__track {
  align-items: center !important;
  padding-bottom: 10px !important;
}

/* Optional: Customize the peek effect */
@media (max-width: 639px) {
  .carousel__slide {
    /* padding: 0 10px !important; Controls peek amount */
  }
}
</style>
