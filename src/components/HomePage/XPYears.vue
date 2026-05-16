<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const containerRef = ref(null);
const displayValue = ref(0);
const TARGET = 2;

const { stop } = useIntersectionObserver(containerRef, ([{ isIntersecting }]) => {
  if (!isIntersecting) return;
  stop();

  const duration = 1500;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    displayValue.value = Math.round(eased * TARGET);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
});
</script>

<template>
  <div class="stat-block" ref="containerRef">
    <div class="stat-number">{{ displayValue }}+</div>
    <div class="stat-divider" />
    <p class="stat-label">سال تجربه</p>
    <p class="stat-desc">کار با انواع تکنولوژی‌های فرانت‌اند</p>
  </div>
</template>

<style scoped>
@keyframes number-glow {
  0%, 100% { filter: drop-shadow(0 0 16px rgba(178, 146, 255, 0.45)); }
  50%       { filter: drop-shadow(0 0 36px rgba(178, 146, 255, 0.85)); }
}

.stat-block {
  text-align: center;
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.stat-number {
  font-size: 5.5rem;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(135deg, #C69AFF 0%, #B292FF 50%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: number-glow 3.5s ease-in-out infinite;
}

.stat-divider {
  width: 56px;
  height: 1px;
  background: linear-gradient(to right, transparent, #B292FF, transparent);
  margin: 0.2rem 0;
}

.stat-label {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.stat-desc {
  font-size: 0.8rem;
  color: #6F6F6F;
  max-width: 180px;
  margin: 0;
  line-height: 1.5;
}
</style>
