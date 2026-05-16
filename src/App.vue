<script setup lang="ts">
import Footer from "./components/UI/Footer.vue";
import Header from "./components/UI/Header.vue";
import ParticleBackground from "./components/HomePage/ParticleBackground.vue";
import CustomCursor from "./components/UI/CustomCursor.vue";
import { Icon } from "@iconify/vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { provideLanguage } from "./composables/useLanguage.js";
import { provideTheme } from "./composables/useTheme.js";

const { isRTL, isTransitioning: langTrans } = provideLanguage();
const { isDark, isTransitioning: themeTrans } = provideTheme();

const isTransitioning = computed(() => langTrans.value || themeTrans.value);

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
    v-show="scrollProgress > 0"
    class="tw-fixed tw-top-0 tw-left-0 tw-h-[2px] tw-z-[100]"
    :style="{
      width: scrollProgress + '%',
      background: 'linear-gradient(to right, var(--c-purple), var(--c-purple-deep))',
      transition: 'width 0.08s linear',
    }"
  />

  <!-- Ambient glow orbs -->
  <div class="tw-fixed tw-inset-0 tw-pointer-events-none tw-z-0 tw-overflow-hidden">
    <div class="ambient-orb ambient-orb-1 tw-absolute -tw-top-32 -tw-right-32 tw-w-[600px] tw-h-[600px] tw-blur-[80px] tw-animate-pulse" style="animation-duration: 8s;" />
    <div class="ambient-orb ambient-orb-2 tw-absolute tw-top-1/2 -tw-left-40 tw-w-[500px] tw-h-[500px] tw-blur-[70px] tw-animate-pulse" style="animation-duration: 13s;" />
    <div class="ambient-orb ambient-orb-3 tw-absolute -tw-bottom-32 -tw-right-20 tw-w-[450px] tw-h-[450px] tw-blur-[65px] tw-animate-pulse" style="animation-duration: 10s;" />
  </div>

  <ParticleBackground :fixed="true" />

  <div
    class="tw-relative tw-z-10"
    :dir="isRTL ? 'rtl' : 'ltr'"
    :style="{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.22s ease' }"
  >
    <div class="tw-pt-8">
      <Header />
    </div>
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
      class="scroll-top-btn tw-fixed tw-bottom-8 tw-right-8 tw-z-50 tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center hover:tw-scale-110 tw-transition-all tw-duration-200"
    >
      <Icon icon="mdi:chevron-up" width="20" class="tw-text-theme-purple-500" />
    </button>
  </Transition>
</template>

<style>
.ambient-orb-1 {
  background: radial-gradient(ellipse at center, var(--glow-1) 0%, transparent 65%);
}
.ambient-orb-2 {
  background: radial-gradient(ellipse at center, var(--glow-2) 0%, transparent 65%);
}
.ambient-orb-3 {
  background: radial-gradient(ellipse at center, var(--glow-3) 0%, transparent 65%);
}

.scroll-top-btn {
  background: var(--scroll-btn-bg);
  border: 1px solid var(--scroll-btn-border);
  box-shadow: 0 4px 20px var(--scroll-btn-shadow);
  backdrop-filter: blur(14px);
}
.scroll-top-btn:hover {
  border-color: var(--scroll-btn-hover-border);
}
</style>
