<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "../../composables/useTheme.js";

const props = withDefaults(defineProps<{ fixed?: boolean }>(), { fixed: false });
const { isDark } = useTheme();

const options = computed(() => {
  const color = isDark.value ? "#B292FF" : "#B292FF";
  return {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      number: { value: 500, density: { enable: true, area: 900 } },
      color: { value: color },
      opacity: { value: isDark.value ? 0.60 : 0.60 },
      size: { value: { min: 0.8, max: 2 }  },
      links: {
        enable: true,
        distance: 130,
        color: color,
        opacity: isDark.value ? 0.50 : 0.50,
        width: isDark.value ? 0.7 : 1.0,
      },
      move: {
        enable: true,
        speed: 0.35,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
    },
    detectRetina: true,

  };
});
</script>

<template>
  <vue-particles
    :key="isDark ? 'dark' : 'light'"
    id="tsparticles-bg"
    class="tw-pointer-events-none tw-z-0 particles-host"
    :class="fixed
      ? 'tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen'
      : 'tw-absolute tw-inset-0 tw-w-full tw-h-full'"
    :options="options"
  />
</template>

<style>
.particles-host canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
