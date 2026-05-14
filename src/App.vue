<script setup lang="ts">
import Footer from "./components/UI/Footer.vue";
import Header from "./components/UI/Header.vue";
import ParticleBackground from "./components/HomePage/ParticleBackground.vue";
</script>

<template>
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

  <div class="tw-relative tw-z-10">
    <Header />
    <div
      class="tw-py-16 tw-px-8 md:tw-px-28 tw-pb-[60px] tw-max-w-[100vw] tw-overflow-x-hidden"
    >
      <router-view />
      <Footer class="tw-mt-24" />
    </div>
  </div>
</template>
