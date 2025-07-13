<script setup lang="ts">
import Footer from "./components/UI/Footer.vue";
import Header from "./components/UI/Header.vue";
</script>

<template>
  <Header />
  <div
    class="tw-py-16 tw-px-8 md:tw-px-28 tw-pb-[60px] tw-max-w-[100vw] tw-overflow-x-hidden"
  >
    <router-view />
    <Footer class="tw-mt-24" />
  </div>
</template>
