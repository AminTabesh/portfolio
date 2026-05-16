<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useLanguage } from "../../composables/useLanguage.js";
import { useTheme } from "../../composables/useTheme.js";

const { lang, t, toggleLang } = useLanguage();
const { isDark, toggleTheme } = useTheme();

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
  <div class="tw-w-full tw-z-50">
    <div class="tw-px-6 sm:tw-px-8 tw-w-full tw-flex tw-justify-center tw-relative ">
      <!-- Back Button -->
      <div
        v-if="!isHome && isDesktop"
        :class="[lang == 'fa'? 'tw-flex tw-flex-row-reverse' : 'tw-flex',' tw-items-center tw-justify-center tw-absolute tw-left-4 sm:tw-left-20 tw-top-1/2 tw--translate-y-1/2 tw-cursor-pointer hover:tw-opacity-80 tw-transition-all tw-duration-200 hover:tw-translate-x-[-3px]']"
        @click="$router.go(-1)"
      >
        <Icon icon="material-symbols-light:arrow-back-ios-rounded" class="tw-mr-1" />
        <span class="tw-text-sm">{{ t.nav.back }}</span>
      </div>

      <!-- Main Navigation -->
      <div class="nav-pill tw-text-[13px] sm:tw-text-[16px] tw-w-full tw-max-w-[640px] tw-h-[52px] sm:tw-h-[60px] tw-rounded-[100px] tw-flex tw-items-center tw-justify-between tw-text-theme-purple-500 tw-px-6 ">
        <!-- Nav links -->
        <div class="tw-flex tw-items-center tw-justify-center tw-gap-2 sm:tw-gap-4">
          <router-link to="/" active-class="!tw-text-theme-white nav-active" class="nav-link hover:tw-text-theme-white tw-transition-colors">
            {{ t.nav.home }}
          </router-link>
          <router-link to="/projects" active-class="!tw-text-theme-white nav-active" class="nav-link hover:tw-text-theme-white tw-transition-colors">
            {{ t.nav.projects }}
          </router-link>
          <router-link to="/experiences" active-class="!tw-text-theme-white nav-active" class="nav-link hover:tw-text-theme-white tw-transition-colors">
            {{ t.nav.experiences }}
          </router-link>
        </div>

        <!-- Actions -->
        <div class="tw-flex tw-gap-2 sm:tw-gap-3 tw-items-center">
          <!-- Theme toggle -->
          <button
            @click="toggleTheme"
            class="icon-btn hover:tw-text-theme-white tw-transition-colors"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <Icon :icon="isDark ? 'ph:sun-bold' : 'ph:moon-bold'" width="18" />
          </button>

          <!-- Language toggle -->
          <button
            @click="toggleLang"
            class="icon-btn tw-flex tw-items-center tw-gap-1 hover:tw-text-theme-white tw-transition-colors tw-select-none"
            :title="lang === 'fa' ? 'Switch to English' : 'تغییر به فارسی'"
          >
            <Icon icon="material-symbols:language" width="18" />
            <span class="tw-text-xs tw-font-semibold tw-tracking-wide">{{ lang === 'fa' ? 'EN' : 'FA' }}</span>
          </button>

          <!-- Social icons — hidden on mobile, visible on sm+ -->
          <div class="tw-hidden sm:tw-flex tw-gap-3 tw-items-center">
            <div class="divider-line tw-w-[1px] tw-h-4 tw-flex-shrink-0"></div>
            <Icon icon="ic:baseline-telegram"   class="social-icon hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer" width="22" @click="openNewTab(telegramLink)" />
            <Icon icon="mdi:github"             class="social-icon hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer" width="22" @click="openNewTab(githubLink)" />
            <Icon icon="ic:baseline-email"      class="social-icon hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer" width="22" @click="openNewTab(emailAddress)" />
            <Icon icon="mdi:linkedin"           class="social-icon hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer" width="22" @click="openNewTab(linkedinLink)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-pill {
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--nav-border);
  box-shadow:
    0 4px 24px var(--nav-shadow),
    inset 0 1px 0 var(--nav-inset);
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
  background: var(--c-text);
  transition: width 0.25s ease;
}

.nav-active::after { width: 100%; }

.social-icon {
  transition: transform 0.2s ease, color 0.2s ease;
}
.social-icon:hover {
  transform: scale(1.25) translateY(-2px);
}

.icon-btn {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;
}
.icon-btn:hover {
  transform: scale(1.15) translateY(-1px);
}

.divider-line {
  background: var(--nav-border);
}
</style>
