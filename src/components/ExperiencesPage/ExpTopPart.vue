<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../UI/CustomButton.vue";
import { useMotion } from "@vueuse/motion";

const buttonRef = ref(null);
const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);

useMotion(text1, {
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
      delay: 300,
    },
  },
});
useMotion(text2, {
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
      delay: 400,
    },
  },
});
useMotion(text3, {
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
      delay: 500,
    },
  },
});

useMotion(buttonRef, {
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
      delay: 600,
    },
  },
});
</script>

<template>
  <div class="tw-flex tw-justify-center">
    <div
      class="tw-relative tw-w-full tw-h-[300px] tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-font-thin tw-text-xl"
      dir="rtl"
    >
      <div
        class="tw-w-[200%] tw-h-[200%] tw-max-w-[560px] tw-max-h-[560px] tw-bg-white tw-rounded-full tw-opacity-[1.2%] tw-filter tw-blur-[50px] tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-x-[-50%] tw-translate-y-[-50%] !tw-animate-pulse tw-z-0"
        style="animation-duration: 6s !important"
      ></div>
      <div
        class="tw-w-[180%] tw-h-[180%] tw-max-w-[560px] tw-max-h-[560px] tw-bg-white tw-rounded-full tw-opacity-[1.2%] tw-filter tw-blur-[50px] tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-x-[-60%] tw-translate-y-[-35%] !tw-animate-pulse tw-z-0"
        style="animation-duration: 8s !important"
      ></div>
      <p ref="text1">از اینجا میتونی با مسیر من</p>
      <p ref="text2">
        به عنوان یک <span class="tw-font-light">برنامه نویس فرانت اند</span>
      </p>
      <p ref="text3">بیشتر آشنا شی :)</p>
      <CustomButton ref="buttonRef" class="tw-mt-5 tw-font-light tw-text-base"
        >دانلودِ رزومه</CustomButton
      >
    </div>
  </div>
</template>
