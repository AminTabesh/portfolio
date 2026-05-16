<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const githubLink = import.meta.env.VITE_GITHUB_URL;
const telegramLink = import.meta.env.VITE_TELEGRAM_URL;
const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
const linkedinLink = "https://www.linkedin.com/in/amintabeshdev";

const route = useRoute();
const isHome = computed(() => route.path === "/");

const isDesktop = computed(() => window.innerWidth >= 1024);

const openNewTab = (urlOrEmail: string) => {
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
  <div class="tw-w-full tw-z-50 tw-mt-8">
    <div
      class="tw-px-4 sm:tw-px-8 tw-w-full tw-flex tw-justify-center tw-relative"
    >
      <!-- Back Button -->
      <div
        v-if="!isHome && isDesktop"
        class="tw-flex tw-items-center tw-justify-center tw-absolute tw-left-4 sm:tw-left-20 tw-top-1/2 tw--translate-y-1/2 tw-cursor-pointer hover:tw-opacity-80 tw-transition-all tw-duration-200 hover:tw-translate-x-[-3px]"
        @click="$router.go(-1)"
      >
        <Icon
          icon="material-symbols-light:arrow-back-ios-rounded"
          class="tw-mr-1"
        />
        <span class="tw-text-sm">برگشتن</span>
      </div>

      <!-- Main Navigation -->
      <div class="nav-pill tw-text-[16px] tw-w-full tw-max-w-[620px] tw-h-[60px] tw-rounded-[100px] tw-flex tw-flex-row-reverse tw-items-center tw-justify-between tw-text-theme-purple-500 tw-px-6">
        <div
          class="tw-flex tw-items-center tw-justify-center tw-gap-4"
        >
          <router-link
            to="/projects"
            active-class="!tw-text-theme-white nav-active"
            class="nav-link hover:tw-text-theme-white tw-transition-colors"
          >
            پروژه ها
          </router-link>
          <router-link
            to="/experiences"
            active-class="!tw-text-theme-white nav-active"
            class="nav-link hover:tw-text-theme-white tw-transition-colors"
          >
            تجربه ها
          </router-link>
          <router-link
            to="/"
            active-class="!tw-text-theme-white nav-active"
            class="nav-link hover:tw-text-theme-white tw-transition-colors"
          >
            خانه
          </router-link>
        </div>

        <div class="tw-flex tw-gap-3 tw-items-center">
          <Icon
            icon="ic:baseline-telegram"
            class="social-icon hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
            width="22"
            @click="openNewTab(telegramLink)"
          />
          <Icon
            icon="mdi:github"
            class="social-icon hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
            width="22"
            @click="openNewTab(githubLink)"
          />
          <Icon
            icon="ic:baseline-email"
            class="social-icon hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
            width="22"
            @click="openNewTab(emailAddress)"
          />
          <Icon
            icon="mdi:linkedin"
            class="social-icon hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
            width="22"
            @click="openNewTab(linkedinLink)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-pill {
  background: rgba(33, 31, 35, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.nav-link {
  position: relative;
  padding-bottom: 3px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  border-radius: 2px;
  background: white;
  transition: width 0.25s ease;
}

.nav-active::after {
  width: 100%;
}

.social-icon {
  transition: transform 0.2s ease, color 0.2s ease;
}

.social-icon:hover {
  transform: scale(1.25) translateY(-2px);
}
</style>
