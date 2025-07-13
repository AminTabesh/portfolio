<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../UI/CustomButton.vue";
import { useMotion } from "@vueuse/motion";

// Image animation
const imageRef = ref<HTMLElement>();
useMotion(imageRef, {
  initial: {
    opacity: 0,
    x: -100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  },
});

// Content animation
const contentRef = ref<HTMLElement>();
useMotion(contentRef, {
  initial: {
    opacity: 0,
    x: 100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      delay: 200,
    },
  },
});

// Buttons animation
const buttonsRef = ref<HTMLElement>();
useMotion(buttonsRef, {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      delay: 400,
    },
  },
});
</script>

<template>
  <div
    class="tw-flex tw-flex-col tw-justify-between tw-items-center md:tw-flex-row"
  >
    <img
      ref="imageRef"
      src="../../assets/Image2.png"
      class="tw-max-w-[200px] md:tw-max-w-[390px] tw-flex-1"
    />
    <div
      ref="contentRef"
      class="tw-flex tw-flex-col tw-justify-center tw-text-right tw-py-8 tw-gap-5 md:tw-w-[45%]"
    >
      <h1 class="tw-font-semibold tw-text-2xl tw-text-center">
        سلام، من امینَم
      </h1>
      <p class="tw-text-theme-gray-400 tw-font-extralight tw-text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است،
        <span class="tw-text-white tw-font-normal">متن 1</span> و متون بلکه
        روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
        <span class="tw-text-white tw-font-normal">متن 2</span> فعلی تکنولوژی
        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
        کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
      </p>
      <div ref="buttonsRef" class="tw-flex tw-gap-4 tw-justify-center">
        <CustomButton>دانلودِ رزومه</CustomButton>
        <CustomButton :is-transparent="true">مشاهده تجربه ها</CustomButton>
      </div>
    </div>
  </div>
</template>
