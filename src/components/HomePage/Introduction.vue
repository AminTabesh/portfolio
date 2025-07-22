<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../UI/CustomButton.vue";
import { useMotion } from "@vueuse/motion";

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

const openNewTab = (url) => {
  if (typeof url === "string" && url.trim() !== "") {
    window.open(url, "_blank");
  } else {
    console.error("Invalid URL provided");
  }
};
</script>

<template>
  <div
    class="tw-flex tw-flex-col tw-justify-between tw-items-center md:tw-flex-row"
  >
    <img
      ref="imageRef"
      src="../../assets/Image2.png"
      alt="Amin Tabesh"
      class="tw-w-full tw-max-w-[200px] md:tw-max-w-[390px] tw-h-auto tw-flex-1"
    />
    <div
      ref="contentRef"
      class="tw-flex tw-flex-col tw-justify-center tw-text-right tw-py-8 tw-gap-5 md:tw-w-[45%]"
    >
      <h1 class="tw-font-semibold tw-text-2xl tw-text-center">
        سلام، من امینَم
      </h1>
      <p
        class="tw-text-theme-gray-400 tw-font-extralight tw-text-center"
        dir="rtl"
      >
        از سال 1402 یادگیری برنامه نویسی
        <span class="tw-text-white tw-font-normal">فرانت اند</span> رو به صورت
        خودآموز و به خاطر علاقه خودم شروع کردم. مباحث پایه رو با دقت یاد گرفتم و
        آروم آروم به سمت مباحث پیشرفته تر رفتم. اول به توصیه دوستام
        <span class="tw-text-white tw-font-normal">ری اکت</span> رو انتخاب کردم،
        ولی بعد با توجه به نیاز محل کارم
        <span class="tw-text-white tw-font-normal ">ویو و ری اکت نیتیو</span> رو
        هم یاد گرفتم و با هر سه تاشون پروژه های تمرینی و واقعی زیادی نوشتم که
        یکسری هاشون رو از قسمت
        <router-link to="/projects" class="tw-text-white tw-font-normal hover:tw-text-theme-purple-500 tw-transition-colors"
          >"پروژه ها"</router-link
        >
        و کاملترشون رو از صفحه
        <a
          class="tw-text-white tw-font-normal hover:tw-text-theme-purple-500 tw-transition-colors"
          href="https://github.com/AminTabesh"
          target="_blank"
          >گیتهابم</a
        >
        میتونی ببینی :)
      </p>
      <div ref="buttonsRef" class="tw-flex tw-gap-4 tw-justify-center">
        <CustomButton
          @click="
            openNewTab(
              'https://drive.google.com/file/d/1mrI4YPL7cHizI6rcc3ElgUo1bW1mKkVl/view?usp=drive_link'
            )
          "
          >دانلودِ رزومه</CustomButton
        >
        <CustomButton :is-transparent="true">
          <router-link to="/experiences">مشاهده تجربه ها</router-link>
        </CustomButton>
      </div>
    </div>
  </div>
</template>
