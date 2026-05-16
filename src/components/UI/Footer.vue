<script setup>
import { Icon } from "@iconify/vue";

const githubLink = import.meta.env.VITE_GITHUB_URL;
const telegramLink = import.meta.env.VITE_TELEGRAM_URL;
const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
const linkedinLink = "https://www.linkedin.com/in/amintabeshdev";

const openNewTab = (urlOrEmail) => {
  if (!urlOrEmail || typeof urlOrEmail !== "string") {
    console.error("Invalid URL/Email provided");
    return;
  }
  if (urlOrEmail.includes("@") && !urlOrEmail.startsWith("http")) {
    window.location.href = `mailto:${urlOrEmail}`;
  } else {
    window.open(urlOrEmail, "_blank", "noopener,noreferrer");
  }
};
</script>

<template>
  <footer class="tw-w-full tw-relative footer-wrapper">
    <div class="tw-w-full tw-h-[72px] tw-bg-theme-gray-800 tw-font-raleway tw-flex tw-justify-between tw-items-center tw-rounded-[100px] tw-px-5 footer-bar">
      <p class="tw-text-theme-gray-400 tw-text-[16px]">Follow Me</p>
      <div class="tw-flex tw-gap-3 tw-items-center">
        <Icon icon="ic:baseline-telegram"   class="footer-icon tw-text-theme-purple-500 hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer" width="24" @click="openNewTab(telegramLink)" />
        <Icon icon="mdi:github"             class="footer-icon tw-text-theme-purple-500 hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer" width="24" @click="openNewTab(githubLink)" />
        <Icon icon="ic:baseline-email"      class="footer-icon tw-text-theme-purple-500 hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer" width="24" @click="openNewTab(emailAddress)" />
        <Icon icon="mdi:linkedin"           class="footer-icon tw-text-theme-purple-500 hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer" width="24" @click="openNewTab(linkedinLink)" />
      </div>
    </div>
    <p class="tw-ml-5 tw-font-raleway tw-mt-3 tw-text-xs tw-text-theme-gray-400">
      Amin Tabesh &copy; 2025
    </p>
  </footer>
</template>

<style scoped>
.footer-wrapper::before {
  content: '';
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 55%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--footer-line), transparent);
}

.footer-bar {
  border: 1px solid var(--footer-border);
  transition: box-shadow 0.3s ease;
}

.footer-bar:hover {
  box-shadow: 0 0 30px var(--footer-hover-shadow);
}

.footer-icon {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s ease;
}

.footer-icon:hover {
  transform: scale(1.35) translateY(-3px);
}
</style>
