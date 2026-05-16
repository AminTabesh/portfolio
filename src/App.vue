<script setup lang="ts">
import Footer from "./components/UI/Footer.vue";
import Header from "./components/UI/Header.vue";
import ParticleBackground from "./components/HomePage/ParticleBackground.vue";
import CustomCursor from "./components/UI/CustomCursor.vue";
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from "vue";
import { provideLanguage } from "./composables/useLanguage.js";

const { isRTL, isTransitioning } = provideLanguage();

const scrollProgress = ref(0);
const showScrollTop = ref(false);

function onScroll() {
  const el = document.documentElement;
  const scrolled = el.scrollTop || document.body.scrollTop;
  const total = el.scrollHeight - el.clientHeight;
  scrollProgress.value = total > 0 ? (scrolled / total) * 100 : 0;
  showScrollTop.value = scrolled > 400;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <CustomCursor />

  <!-- Scroll progress bar -->
  <div
    class="tw-fixed tw-top-0 tw-left-0 tw-h-[2px] tw-z-[100]"
    :style="{
      width: scrollProgress + '%',
      background: 'linear-gradient(to right, #B292FF, #6104D6)',
      transition: 'width 0.08s linear',
    }"
  />

  <ParticleBackground :fixed="true" />

  <div class="tw-fixed tw-inset-0 tw-pointer-events-none tw-z-0">
    <div
      class="tw-absolute -tw-top-32 -tw-right-32 tw-w-[600px] tw-h-[600px] tw-bg-[radial-gradient(ellipse_at_center,_rgba(157,106,255,0.14)_0%,_transparent_65%)] tw-blur-[80px] tw-animate-pulse"
      style="animation-duration: 8s;"
    />
    <div
      class="tw-absolute tw-top-1/2 -tw-left-40 tw-w-[500px] tw-h-[500px] tw-bg-[radial-gradient(ellipse_at_center,_rgba(97,4,214,0.16)_0%,_transparent_65%)] tw-blur-[70px] tw-animate-pulse"
      style="animation-duration: 13s;"
    />
    <div
      class="tw-absolute -tw-bottom-32 -tw-right-20 tw-w-[450px] tw-h-[450px] tw-bg-[radial-gradient(ellipse_at_center,_rgba(130,60,220,0.13)_0%,_transparent_65%)] tw-blur-[65px] tw-animate-pulse"
      style="animation-duration: 10s;"
    />
  </div>

  <div
    class="tw-relative tw-z-10"
    :dir="isRTL ? 'rtl' : 'ltr'"
    :style="{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.22s ease' }"
  >
    <Header />
    <div
      class="tw-py-16 tw-px-8 md:tw-px-28 tw-pb-[60px] tw-max-w-[100vw] tw-overflow-x-hidden"
    >
      <router-view v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
      <Footer class="tw-mt-24" />
    </div>
  </div>

  <!-- Scroll to top button -->
  <Transition name="btn-fade">
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="tw-fixed tw-bottom-8 tw-right-8 tw-z-50 tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border tw-border-white/10 hover:tw-border-[#B292FF]/50 hover:tw-scale-110 tw-transition-all tw-duration-200"
      style="background: rgba(33,31,35,0.85); backdrop-filter: blur(14px); box-shadow: 0 4px 20px rgba(178,146,255,0.2);"
    >
      <Icon icon="mdi:chevron-up" width="20" class="tw-text-[#B292FF]" />
    </button>
  </Transition>
</template>
