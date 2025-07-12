<script setup lang="ts">
import DetailedTechCard from "./DetailedTechCard.vue";
import TechIcons from "../../constants/TechIcons";
import DetailedTechCarousel from "./DetailedTechCarousel.vue";
const techGroups = [
  {
    title: "Front-end Frameworks",
    techs: [
      { title: "vue.js", icon: TechIcons.vue },
      { title: "React.js", icon: TechIcons.react },
      { title: "React Native", icon: TechIcons.reactNative },
    ],
  },
  {
    title: "Styling",
    techs: [
      { title: "Tailwind", icon: TechIcons.tailwind },
      { title: "Vuetify", icon: TechIcons.Vuetify },
      { title: "NativeWind", icon: TechIcons.nativeWind },
      { title: "Styled Components", icon: TechIcons.styledComponents },
    ],
  },
  {
    title: "State Management",
    techs: [
      { title: "Vuex", icon: TechIcons.vuex },
      { title: "Redux", icon: TechIcons.redux },
    ],
  },
  {
    title: "Data Fetching",
    techs: [
      { title: "Tanstack Query", icon: TechIcons.tanstackQuery },
      { title: "axios", icon: TechIcons.axios },
    ],
  },
  {
    title: "Others",
    techs: [
      { title: "Expo", icon: TechIcons.expo },
      { title: "React Router", icon: TechIcons.reactRouter },
      { title: "Vue Router", icon: TechIcons.vueRouter },
      { title: "React Navigation", icon: TechIcons.reactNavigation },
    ],
  },
];
</script>

<template>
  <div>
    <div class="tw-text-center tw-font-thin tw-text-2xl" dir="rtl">
      <p>تا حالا</p>
      <p>تجربه کار با این تکنولوژی ها</p>
      <p>رو بدست آوردم:</p>
    </div>

    <!-- <div class="tw-flex tw-justify-center tw-items-center tw-mt-24">
      <DetailedTechCard
        v-for="grp in techGroups"
        :key="grp.title"
        v-bind="grp"
      />
    </div> -->

    <DetailedTechCarousel :techs="techGroups" />
  </div>
</template>

<style></style>
