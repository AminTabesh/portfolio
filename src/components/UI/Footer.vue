<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer class="tw-w-full">
    <div
      class="tw-w-full tw-h-[72px] tw-bg-theme-gray-800 tw-font-raleway tw-flex tw-justify-between tw-items-center tw-rounded-[100px] tw-px-5"
    >
      <p class="tw-text-[#B4B4B4] tw-text-[16px]">Follow Me</p>
      <div class="tw-flex tw-gap-2 tw-items-center">
        <Icon
          icon="ic:baseline-telegram"
          class="tw-text-theme-purple-500"
          width="22"
        />
        <Icon icon="mdi:github" class="tw-text-theme-purple-500" width="22" />
        <Icon
          icon="ic:baseline-email"
          class="tw-text-theme-purple-500"
          width="22"
        />
      </div>
    </div>
    <p class="tw-ml-5 tw-font-raleway tw-mt-3 tw-text-xs">Amin Tabesh &copy; 2025</p>
  </footer>
</template>
