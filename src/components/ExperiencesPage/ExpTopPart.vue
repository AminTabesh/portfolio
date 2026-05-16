<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../UI/CustomButton.vue";
import { useMotion } from "@vueuse/motion";
import { useLanguage } from "../../composables/useLanguage.js";

const { t } = useLanguage();

const cvUrl = import.meta.env.VITE_CV_URL;

const buttonRef = ref(null);
const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);

useMotion(text1, {
  initial: { opacity: 0, y: 20 },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15, delay: 300 },
  },
});
useMotion(text2, {
  initial: { opacity: 0, y: 20 },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15, delay: 450 },
  },
});
useMotion(text3, {
  initial: { opacity: 0, y: 20 },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15, delay: 600 },
  },
});
useMotion(buttonRef, {
  initial: { opacity: 0, y: 20 },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15, delay: 750 },
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
  <div class="tw-flex tw-justify-center tw-mb-14">
    <div
      class="exp-hero tw-relative tw-w-full tw-h-[300px] tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-font-light tw-text-xl"
    >
      <!-- Ambient glow -->
      <div class="exp-glow-1" />
      <div class="exp-glow-2" />

      <!-- Decorative ring -->
      <div class="exp-ring" />

      <p ref="text1" class="exp-muted tw-relative tw-z-10 tw-text-theme-gray-400">{{ t.expTopPart.line1 }}</p>
      <p ref="text2" class="tw-relative tw-z-10 tw-font-normal">
        {{ t.expTopPart.line2prefix }}<span class="exp-highlight">{{ t.expTopPart.highlight }}</span>
      </p>
      <p ref="text3" class="exp-muted tw-relative tw-z-10 tw-text-theme-gray-400">{{ t.expTopPart.line3 }}</p>
      <div ref="buttonRef" class="tw-mt-6 tw-relative tw-z-10">
        <CustomButton class="tw-font-light tw-text-base" @click="openNewTab(cvUrl)">
          {{ t.expTopPart.viewResume }}
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes glow-drift-1 {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-46%, -54%) scale(1.1); opacity: 0.9; }
}

@keyframes glow-drift-2 {
  0%, 100% { transform: translate(-50%, -35%) scale(1); opacity: 0.5; }
  50% { transform: translate(-54%, -40%) scale(1.08); opacity: 0.8; }
}

@keyframes ring-spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.exp-hero {
  overflow: visible;
}

.exp-glow-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--exp-glow-1) 0%, transparent 70%);
  filter: blur(40px);
  animation: glow-drift-1 7s ease-in-out infinite;
  z-index: 0;
}

.exp-glow-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--exp-glow-2) 0%, transparent 65%);
  filter: blur(35px);
  animation: glow-drift-2 9s ease-in-out infinite;
  z-index: 0;
}

.exp-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  border: 1px solid transparent;
  background: conic-gradient(
    from 0deg,
    var(--exp-ring-stop-1) 0deg,
    var(--exp-ring-stop-2) 90deg,
    var(--exp-ring-stop-3) 180deg,
    var(--exp-ring-stop-1) 270deg
  ) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: ring-spin 10s linear infinite;
  z-index: 0;
  opacity: 0.6;
}

.exp-highlight {
  background: var(--exp-highlight);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-flow 3s ease infinite;
  font-weight: 500;
}

:global(.light-mode) .exp-muted {
  color: #3D3460 !important;
}
</style>
