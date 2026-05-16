<script setup>
const props = defineProps({
  isTransparent: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="{
      'non-transparent-btn': !isTransparent,
      'transparent-btn': isTransparent,
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.non-transparent-btn {
  @apply tw-bg-white tw-text-theme-gray-900 tw-px-5 tw-py-2 tw-rounded-full;
  position: relative;
  overflow: hidden;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.non-transparent-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(178, 146, 255, 0.4),
    transparent
  );
  animation: shimmer-slide 2.8s ease-in-out infinite;
  animation-delay: 0.8s;
}

.non-transparent-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(178, 146, 255, 0.3);
}

.non-transparent-btn:active {
  transform: translateY(0);
  box-shadow: none;
}

.transparent-btn {
  @apply tw-text-theme-purple-500 hover:tw-text-purple-400;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.2s ease;
}

.transparent-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  right: 50%;
  height: 1px;
  background: #B292FF;
  transition: left 0.3s ease, right 0.3s ease;
}

.transparent-btn:hover::after {
  left: 0;
  right: 0;
}
</style>
