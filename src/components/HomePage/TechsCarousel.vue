<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import TechCard from "./TechCard.vue";
import "swiper/css";
import "swiper/css/pagination";

defineProps({
  techs: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-container">
      <Swiper
        :modules="[Pagination]"
        :slides-per-view="1.2"
        :loop="true"
        :space-between="20"
        :pagination="{ clickable: true, el: '.custom-pagination' }"
        :breakpoints="{
          550: { slidesPerView: 2.35 },
          768: { slidesPerView: 2.35 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }"
      >
        <SwiperSlide v-for="(tech, index) in techs" :key="index">
          <div class="carousel__item">
            <TechCard v-bind="tech" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="custom-pagination"></div>
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
  @apply tw-select-none;
}

.swiper-wrapper {
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
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

.swiper-pagination-bullet {
  height: 13px;
  width: 20px !important;
  border-radius: 100px !important;
  background-color: #606060 !important;
  margin: 0 2px !important;
  padding: 0 !important;
  border: none !important;
  transition: all 0.3s ease !important;
  opacity: 1 !important;
}

.swiper-pagination-bullet-active {
  background-color: #d9d9d9 !important;
  width: 65px !important;
}
</style>
