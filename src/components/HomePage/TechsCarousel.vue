<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { Pagination as CarouselPagination } from "vue3-carousel";
import TechCard from "./TechCard.vue";
import "vue3-carousel/dist/carousel.css";

const props = defineProps({
  techs: {
    type: Array,
    required: true,
  },
});

const carousel = ref(null);

const carouselConfig = {
  itemsToShow: 1.2,
  wrapAround: true,
  gap: 20,
  snapAlign: "start",
  autoplay: false,
  breakpoints: {
    550: {
      itemsToShow: 2.35,
    },
    768: {
      itemsToShow: 2.35,
    },
    1024: {
      itemsToShow: 4.35 ,
      gap: 45,
    },
  },
};
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-container">
      <Carousel ref="carousel" v-bind="carouselConfig">
        <Slide v-for="(tech, index) in techs" :key="index">
          <div class="carousel__item">
            <TechCard v-bind="tech" class="flex-shrink-0 mr-[15px]" />
          </div>
        </Slide>
      </Carousel>
    </div>

    <div class="custom-pagination">
      <CarouselPagination v-if="carousel" :carousel="carousel" />
    </div>
  </div>
</template>

<style>
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.carousel-container {
  width: 100%;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
}

.custom-pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
}

.carousel__pagination {
  position: static !important;
  display: flex;
  justify-content: center;
  margin: 0 auto !important;
  padding: 0 !important;
  transform: none !important;
  left: auto !important;
}

.carousel__pagination-button {
  height: 13px;
  width: 20px !important;
  border-radius: 100px !important;
  background-color: #606060 !important;
  margin: 0 2px !important;
  padding: 0 !important;
  border: none !important;
  transition: all 0.3s ease !important;
}

.carousel__pagination-button--active {
  background-color: #d9d9d9 !important;
  width: 65px !important;
}
</style>
