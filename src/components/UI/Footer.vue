<script setup>
import { Icon } from "@iconify/vue";

const openNewTab = (urlOrEmail) => {
  if (!urlOrEmail || typeof urlOrEmail !== "string") {
    console.error("Invalid URL/Email provided");
    return;
  }

  // If it's an email (contains '@' but not 'http')
  if (urlOrEmail.includes("@") && !urlOrEmail.startsWith("http")) {
    window.location.href = `mailto:${urlOrEmail}`;
  }
  // If it's a regular URL
  else {
    window.open(urlOrEmail, "_blank", "noopener,noreferrer");
  }
};
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
          class="tw-text-theme-purple-500 hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
          width="22"
          @click="openNewTab('https://t.me/AminTabesham')"
        />
        <Icon
          icon="mdi:github"
          class="tw-text-theme-purple-500 hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
          width="22"
          @click="openNewTab('https://github.com/AminTabesh')"
        />
        <Icon
          icon="ic:baseline-email"
          class="tw-text-theme-purple-500 hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
          width="22"
          @click="openNewTab('amintabeshyt@gmail.com')"
        />
      </div>
    </div>
    <p class="tw-ml-5 tw-font-raleway tw-mt-3 tw-text-xs">
      Amin Tabesh &copy; 2025
    </p>
  </footer>
</template>
