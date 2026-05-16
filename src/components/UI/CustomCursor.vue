<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const dotX = ref(-200);
const dotY = ref(-200);
const ringX = ref(-200);
const ringY = ref(-200);
const hovering = ref(false);
const visible = ref(false);

const isTouch =
  typeof window !== "undefined"
    ? window.matchMedia("(pointer: coarse)").matches
    : true;

let raf: number;
let targetX = -200;
let targetY = -200;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function loop() {
  ringX.value = lerp(ringX.value, targetX, 0.14);
  ringY.value = lerp(ringY.value, targetY, 0.14);
  raf = requestAnimationFrame(loop);
}

function onMove(e: MouseEvent) {
  targetX = e.clientX;
  targetY = e.clientY;
  dotX.value = e.clientX;
  dotY.value = e.clientY;
  if (!visible.value) {
    ringX.value = e.clientX;
    ringY.value = e.clientY;
    visible.value = true;
  }
}

function onOver(e: MouseEvent) {
  const t = e.target as HTMLElement;
  hovering.value = !!t.closest(
    "a, button, [role='button'], input, select, label, [tabindex]"
  );
}

onMounted(() => {
  if (isTouch) return;
  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("mouseover", onOver, { passive: true });
  document.documentElement.classList.add("custom-cursor-active");
  raf = requestAnimationFrame(loop);
});

onUnmounted(() => {
  if (isTouch) return;
  window.removeEventListener("mousemove", onMove);
  window.removeEventListener("mouseover", onOver);
  document.documentElement.classList.remove("custom-cursor-active");
  cancelAnimationFrame(raf);
});
</script>

<template>
  <Teleport to="body">
    <template v-if="!isTouch && visible">
      <!-- Dot — snaps instantly to cursor -->
      <div
        class="c-dot"
        :class="{ 'c-dot--hover': hovering }"
        :style="{ transform: `translate(${dotX - 4}px, ${dotY - 4}px)` }"
      />
      <!-- Ring — lerped behind the dot -->
      <div
        class="c-ring"
        :class="{ 'c-ring--hover': hovering }"
        :style="{ transform: `translate(${ringX - 16}px, ${ringY - 16}px)` }"
      />
    </template>
  </Teleport>
</template>

<style>
/* Hide native cursor on all elements when custom cursor is active */
.custom-cursor-active,
.custom-cursor-active * {
  cursor: none !important;
}

.c-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #b292ff;
  pointer-events: none;
  z-index: 99999;
  will-change: transform;
  transition: background 0.15s ease, width 0.15s ease, height 0.15s ease;
}

.c-dot--hover {
  background: #ffffff;
  width: 6px;
  height: 6px;
}

.c-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.5px solid rgba(178, 146, 255, 0.7);
  pointer-events: none;
  z-index: 99998;
  will-change: transform;
  transition: border-color 0.2s ease, width 0.2s ease, height 0.2s ease,
    top 0.2s ease, left 0.2s ease;
}

.c-ring--hover {
  width: 44px;
  height: 44px;
  border-color: rgba(255, 255, 255, 0.55);
  /* Shift to keep centered when size changes */
  margin-left: -6px;
  margin-top: -6px;
}
</style>
