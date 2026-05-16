<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useLanguage } from "../../composables/useLanguage.js";

const { t } = useLanguage();

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
    <p class="stat-label">{{ t.xpYears.label }}</p>
    <p class="stat-desc">{{ t.xpYears.desc }}</p>
  </div>
</template>

<style scoped>
@keyframes number-glow {
  0%, 100% { filter: drop-shadow(0 0 16px var(--stat-glow-dim)); }
  50%       { filter: drop-shadow(0 0 36px var(--stat-glow-bright)); }
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
  background: var(--stat-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: number-glow 3.5s ease-in-out infinite;
}

.stat-divider {
  width: 56px;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--stat-divider-col), transparent);
  margin: 0.2rem 0;
}

.stat-label {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0;
}

.stat-desc {
  font-size: 0.8rem;
  color: var(--c-text-muted);
  max-width: 180px;
  margin: 0;
  line-height: 1.5;
}
</style>
