<script setup>
import { onMounted, ref } from 'vue'
import { useMotion } from '@vueuse/motion'

// Create refs for each text element
const jsRef = ref(null)
const reactRef = ref(null)
const gamesRef = ref(null)

// Animate each text element sequentially when component mounts
onMounted(() => {
  useMotion(jsRef, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        delay: 300
      }
    }
  })

  useMotion(reactRef, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        delay: 300
      }
    }
  })

  useMotion(gamesRef, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        delay: 300
      }
    }
  })
})
</script>

<template>
  <div class="tw-w-full tw-flex tw-justify-center tw-items-center tw-h-96 tw-relative">
    <!-- Glow layers (unchanged) -->
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
      <p ref="jsRef" class="tw-text-[#C69AFF]">JavaScript</p>
      <p ref="reactRef" class="tw-text-[#9F53FF]">React</p>
      <p ref="gamesRef" class="tw-text-[#6104D6]">Video Games</p>
    </div>
  </div>
</template>