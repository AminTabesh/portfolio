<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const isHome = computed(() => route.path === "/");

const isDesktop = computed(() => window.innerWidth >= 1024);
</script>

<template>
  <div class="tw-w-full tw-z-50 tw-mt-8">
    <div
      class="tw-px-4 sm:tw-px-8 tw-w-full tw-flex tw-justify-center tw-relative"
    >
      <!-- Back Button -->
      <div
        v-if="!isHome && isDesktop"
        class="tw-flex tw-items-center tw-justify-center tw-absolute tw-left-4 sm:tw-left-20 tw-top-1/2 tw--translate-y-1/2 tw-cursor-pointer hover:tw-opacity-80 tw-transition-opacity"
        @click="$router.go(-1)"
      >
        <Icon
          icon="material-symbols-light:arrow-back-ios-rounded"
          class="tw-mr-1"
        />
        <span class="tw-text-sm">برگشتن</span>
      </div>

      <!-- Main Navigation -->
      <div
        class="tw-text-[16px] tw-w-full tw-max-w-[620px] tw-h-[60px] tw-bg-[#211F23] tw-rounded-[100px] tw-flex tw-flex-row-reverse tw-items-center tw-justify-between tw-text-theme-purple-500 tw-px-6"
      >
        <div
          class="tw-flex tw-flexro tw-items-center tw-justify-center tw-gap-4"
        >
          <router-link
            to="/experiences"
            active-class="!tw-text-theme-white"
            class="hover:tw-text-theme-white tw-transition-colors"
          >
            تجربه ها
          </router-link>
          <router-link
            to="/"
            active-class="!tw-text-theme-white"
            class="hover:tw-text-theme-white tw-transition-colors"
          >
            خانه
          </router-link>
        </div>

        <div class="tw-flex tw-gap-2 tw-items-center">
          <Icon
            icon="ic:baseline-telegram"
            class="hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
            width="22"
            
          />
          <Icon
            icon="mdi:github"
            class="hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
            width="22"
            
          />
          <Icon
            icon="ic:baseline-email"
            class="hover:tw-text-theme-white tw-transition-colors tw-cursor-pointer"
            width="22"
            
          />
        </div>
      </div>
    </div>
  </div>
</template>
