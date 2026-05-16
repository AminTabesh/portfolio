<script setup>
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  images: { type: Array, required: true },
  currentIndex: { type: Number, required: true },
});

const emit = defineEmits(["update:modelValue", "update:currentIndex"]);

function close() {
  emit("update:modelValue", false);
}

function prev() {
  emit("update:currentIndex", (props.currentIndex - 1 + props.images.length) % props.images.length);
}

function next() {
  emit("update:currentIndex", (props.currentIndex + 1) % props.images.length);
}

function onKeydown(e) {
  if (!props.modelValue) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowLeft") next();
  if (e.key === "ArrowRight") prev();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center"
      >
        <div
          class="tw-absolute tw-inset-0 tw-bg-black/80 tw-backdrop-blur-sm"
          @click="close"
        />

        <div class="tw-relative tw-z-10 tw-flex tw-items-center tw-gap-3 tw-max-w-5xl tw-w-full tw-px-4">
          <button
            v-if="images.length > 1"
            class="modal-nav-btn tw-flex-shrink-0 tw-w-11 tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-transition-all"
            @click="prev"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div class="tw-flex-1 tw-flex tw-items-center tw-justify-center">
            <img
              :src="images[currentIndex]"
              :alt="`image ${currentIndex + 1}`"
              class="modal-image tw-max-w-full tw-max-h-[80vh] tw-object-contain tw-rounded-xl tw-shadow-2xl"
            />
          </div>

          <button
            v-if="images.length > 1"
            class="modal-nav-btn tw-flex-shrink-0 tw-w-11 tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-transition-all"
            @click="next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <button
          class="modal-nav-btn tw-absolute tw-top-4 tw-right-4 tw-z-20 tw-w-11 tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-transition-all"
          @click="close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div
          v-if="images.length > 1"
          class="tw-absolute tw-bottom-6 tw-left-1/2 -tw-translate-x-1/2 tw-flex tw-gap-2"
        >
          <button
            v-for="(_, i) in images"
            :key="i"
            class="tw-w-2 tw-h-2 tw-rounded-full tw-transition-colors"
            :class="i === currentIndex ? 'tw-bg-white' : 'tw-bg-white/30'"
            @click="emit('update:currentIndex', i)"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .modal-image,
.modal-leave-active .modal-image {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-image,
.modal-leave-to .modal-image {
  transform: scale(0.93);
  opacity: 0;
}

.modal-nav-btn {
  background: rgba(33, 31, 35, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(178, 146, 255, 0.2);
  color: #B292FF;
}
.modal-nav-btn:hover {
  background: rgba(178, 146, 255, 0.15);
  border-color: rgba(178, 146, 255, 0.5);
  transform: scale(1.1);
}
</style>
