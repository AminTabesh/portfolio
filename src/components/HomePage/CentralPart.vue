<script setup>
import { onMounted, ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const jsRef = ref(null)
const reactRef = ref(null)
const gamesRef = ref(null)

onMounted(() => {
  useMotion(jsRef, {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
        delay: 100
      }
    }
  })

  useMotion(reactRef, {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
        delay: 300
      }
    }
  })

  useMotion(gamesRef, {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
        delay: 500
      }
    }
  })
})
</script>

<template>
  <div class="tw-w-full tw-flex tw-justify-center tw-items-center tw-h-96 tw-relative">
    <!-- Glow layers -->
    <div class="glow-layer tw-absolute tw-inset-0 tw-opacity-70">
      <div
        class="tw-absolute tw-top-1/2 tw-left-1/4 tw-w-[200%] tw-h-[200%] tw-bg-[radial-gradient(ellipse_at_center,_rgba(157,106,255,0.5)_0%,_transparent_70%)] tw-filter tw-blur-[80px] tw-transform tw--translate-x-1/4 tw--translate-y-1/2 tw-animate-pulse"
        style="animation-duration: 6s !important;"
      ></div>
      <div
        class="tw-absolute tw-top-2/3 tw-left-1/3 tw-w-[150%] tw-h-[150%] tw-bg-[radial-gradient(ellipse_at_center,_rgba(97,4,214,0.5)_0%,_transparent_70%)] tw-filter tw-blur-[60px] tw-transform tw--translate-x-1/2 tw--translate-y-1/3 tw-animate-pulse"
        style="animation-duration: 8s !important;"
      ></div>
    </div>

    <!-- Animated text content -->
    <div class="tw-flex tw-flex-col tw-gap-24 tw-justify-center tw-items-center tw-font-raleway tw-font-semibold tw-text-[40px] tw-text-nowrap tw-relative">
      <p ref="jsRef" class="central-text js-text">JavaScript</p>
      <p ref="reactRef" class="central-text react-text">React</p>
      <p ref="gamesRef" class="central-text games-text">Video Games</p>
    </div>
  </div>
</template>

<style scoped>
.central-text {
  cursor: default;
  transition: transform 0.3s ease, filter 0.3s ease;
  background-size: 250% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.central-text:hover {
  transform: scale(1.08);
  filter: brightness(1.2);
}

.js-text {
  background-image: linear-gradient(90deg, #C69AFF, #E0D0FF, #C69AFF);
  animation: gradient-flow 4s ease infinite;
}

.react-text {
  background-image: linear-gradient(90deg, #9F53FF, #C69AFF, #9F53FF);
  animation: gradient-flow 4s ease infinite;
  animation-delay: 0.7s;
}

.games-text {
  background-image: linear-gradient(90deg, #6104D6, #9D6AFF, #6104D6);
  animation: gradient-flow 4s ease infinite;
  animation-delay: 1.4s;
}
</style>
