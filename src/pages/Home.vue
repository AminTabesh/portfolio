<script setup lang="ts">
import CentralPart from "../components/HomePage/CentralPart.vue";
import DetailedTechs from "../components/HomePage/DetailedTechs.vue";
import Experiences from "../components/HomePage/Experiences.vue";
import Introduction from "../components/HomePage/Introduction.vue";
</script>

<template>
  <Introduction />
  <Experiences />
  <CentralPart class="tw-mt-28"/>
  <DetailedTechs class="tw-mt-44"/>
</template>
