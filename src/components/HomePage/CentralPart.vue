<template>
  <div
    class="tw-w-full tw-flex tw-justify-center tw-items-center tw-h-96 tw-relative"
  >
    <!-- Glow layers -->
    <div class="glow-layer tw-absolute tw-inset-0 tw-opacity-70">
      <div
        class="tw-absolute tw-top-1/2 tw-left-1/4 tw-w-[200%] tw-h-[200%] tw-bg-[radial-gradient(ellipse_at_center,_rgba(157,106,255,0.5)_0%,_transparent_70%)] tw-filter tw-blur-[80px] tw-transform tw--translate-x-1/4 tw--translate-y-1/2 tw-animate-pulse"
        style="animation-duration: 6s !important;"
      ></div>
      <div
        class="tw-absolute tw-top-2/3 tw-left-1/3 tw-w-[150%] tw-h-[150%] tw-bg-[radial-gradient(ellipse_at_center,_rgba(97,4,214,0.5)_0%,_transparent_70%)] tw-filter tw-blur-[60px] tw-transform tw--translate-x-1/2 tw--translate-y-1/3 tw-animate-pulse"
        style="animation-duration: 82s !important;"
      ></div>
    </div>

    <!-- Text content -->
    <div
      class="tw-flex tw-flex-col tw-gap-24 tw-justify-center tw-items-center tw-font-raleway tw-font-semibold tw-text-[40px] tw-text-nowrap tw-relative"
    >
      <p class="tw-text-[#C69AFF]">JavaScript</p>
      <p class="tw-text-[#9F53FF]">React</p>
      <p class="tw-text-[#6104D6]">Video Games</p>
    </div>
  </div>
</template>
