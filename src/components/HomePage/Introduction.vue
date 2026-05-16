<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../UI/CustomButton.vue";
import { useMotion } from "@vueuse/motion";

const cvUrl = import.meta.env.VITE_CV_URL;

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
    <div
      ref="imageRef"
      class="tw-relative tw-w-full tw-max-w-[200px] md:tw-max-w-[390px] tw-flex-1 profile-wrapper"
    >
      <img
        src="../../assets/Image2.png"
        alt="Amin Tabesh"
        class="tw-w-full tw-h-auto profile-img"
      />
      <img
        src="../../assets/experience-logos/react-logo.png"
        alt="React"
        class="tech-logo react-logo tw-absolute tw-w-10 tw-h-10 md:tw-w-[58px] md:tw-h-[58px] tw-object-contain tw-rounded-[14px] tw-p-2 tw-border tw-border-white/10 tw-top-1 tw-right-1 md:-tw-top-[5px] md:tw-right-[80px]"
      />
      <img
        src="../../assets/experience-logos/vue-logo.png"
        alt="Vue"
        class="tech-logo vue-logo tw-absolute tw-w-10 tw-h-10 md:tw-w-[58px] md:tw-h-[58px] tw-object-contain tw-rounded-[14px] tw-p-2 tw-border tw-border-white/10 tw-top-1 tw-left-1 md:tw-top-[70px] md:tw-left-[50px]"
      />
      <img
        src="../../assets/experience-logos/js-logo.png"
        alt="JavaScript"
        class="tech-logo js-logo tw-absolute tw-w-10 tw-h-10 md:tw-w-[58px] md:tw-h-[58px] tw-object-contain tw-rounded-[14px] tw-p-2 tw-border tw-border-white/10 tw-bottom-1 tw-left-1 md:tw-bottom-[60px] md:tw-left-[30px]"
      />
      <img
        src="../../assets/experience-logos/typescript.svg"
        alt="TypeScript"
        class="tech-logo ts-logo tw-absolute tw-w-10 tw-h-10 md:tw-w-[58px] md:tw-h-[58px] tw-object-contain tw-rounded-[14px] tw-p-2 tw-border tw-border-white/10 tw-bottom-1 tw-right-1 md:tw-bottom-[65px] md:tw-right-[45px]"
      />
    </div>
    <div
      ref="contentRef"
      class="tw-flex tw-flex-col tw-justify-center tw-text-right tw-py-8 tw-gap-5 md:tw-w-[45%]"
    >
      <div class="tw-text-center">
        <h1 class="tw-font-semibold tw-text-2xl">
          سلام، من امینَم
        </h1>
        <p class="tw-text-theme-purple-500 tw-text-sm tw-mt-1 tw-font-light tw-tracking-widest role-label">
          Front-end Developer
        </p>
      </div>
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
        <span class="tw-text-white tw-font-normal">ویو</span> رو
        هم یاد گرفتم و پروژه های تمرینی و واقعی زیادی نوشتم که
        یکسری هاشون رو از قسمت
        <router-link
          to="/projects"
          class="tw-text-white tw-font-normal hover:tw-text-theme-purple-500 tw-transition-colors"
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
        <CustomButton @click="openNewTab(cvUrl)">مشاهده‌ی رزومه</CustomButton>
        <CustomButton :is-transparent="true">
          <router-link to="/experiences">مشاهده تجربه ها</router-link>
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(3deg); }
}

@keyframes profile-glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 30px rgba(178, 146, 255, 0.18)); }
  50% { filter: drop-shadow(0 0 60px rgba(178, 146, 255, 0.38)); }
}

@keyframes role-fade-in {
  from { opacity: 0; letter-spacing: 0.05em; }
  to { opacity: 1; letter-spacing: 0.2em; }
}

.profile-wrapper {
  animation: profile-glow-pulse 5s ease-in-out infinite;
}

.profile-img {
  transition: filter 0.4s ease;
}

.tech-logo {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  animation: float 3.5s ease-in-out infinite;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tech-logo:hover {
  box-shadow:
    0 12px 32px rgba(178, 146, 255, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.react-logo { animation-delay: 0s; }
.vue-logo   { animation-delay: 0.875s; }
.js-logo    { animation-delay: 1.75s; }
.ts-logo    { animation-delay: 2.625s; }

.role-label {
  animation: role-fade-in 1s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;
}
</style>
