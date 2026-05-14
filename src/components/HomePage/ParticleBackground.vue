<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = withDefaults(defineProps<{ fixed?: boolean }>(), { fixed: false });

const canvas = ref<HTMLCanvasElement | null>(null);
let animFrame: number;
let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
let w = 0;
let h = 0;

const COUNT = 70;
const MAX_DIST = 130;
const R = 178, G = 146, B = 255; // #B292FF

function initParticles() {
  particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.2 + 0.8,
  }));
}

function resize() {
  const c = canvas.value;
  if (!c) return;
  if (props.fixed) {
    w = window.innerWidth;
    h = window.innerHeight;
  } else {
    if (!c.parentElement) return;
    const rect = c.parentElement.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
  }
  c.width = w;
  c.height = h;
  initParticles();
}

function tick() {
  const c = canvas.value;
  if (!c) return;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) { p.x = 0; p.vx *= -1; }
    if (p.x > w) { p.x = w; p.vx *= -1; }
    if (p.y < 0) { p.y = 0; p.vy *= -1; }
    if (p.y > h) { p.y = h; p.vy *= -1; }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${R},${G},${B},0.5)`;
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < MAX_DIST) {
        const alpha = (1 - d / MAX_DIST) * 0.18;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }
  }

  animFrame = requestAnimationFrame(tick);
}

let ro: ResizeObserver;

onMounted(() => {
  resize();
  tick();
  if (props.fixed) {
    window.addEventListener("resize", resize);
  } else {
    ro = new ResizeObserver(resize);
    if (canvas.value?.parentElement) ro.observe(canvas.value.parentElement);
  }
});

onUnmounted(() => {
  cancelAnimationFrame(animFrame);
  if (props.fixed) {
    window.removeEventListener("resize", resize);
  } else {
    ro?.disconnect();
  }
});
</script>

<template>
  <canvas
    ref="canvas"
    class="tw-pointer-events-none tw-z-0"
    :class="fixed
      ? 'tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen'
      : 'tw-absolute tw-inset-0 tw-w-full tw-h-full'"
  />
</template>
