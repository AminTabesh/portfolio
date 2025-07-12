<script setup lang="ts">
import CustomButton from "../UI/CustomButton.vue";
</script>

<template>
  <div class="tw-flex tw-flex-col tw-justify-between tw-items-center">
    <img src="../../assets/Image.png" class="tw-w-[160px] tw-flex-1" />
    <div
      class="tw-flex tw-flex-col tw-justify-center tw-text-right tw-py-8 tw-gap-5"
    >
      <h1 class="tw-font-semibold tw-text-2xl tw-text-center">
        سلام، من امینَم
      </h1>
      <p class="tw-text-theme-gray-400 tw-font-extralight tw-text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است،
        <span class="tw-text-white tw-font-normal">متن 1</span> و متون بلکه
        روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
        <span class="tw-text-white tw-font-normal">متن 2</span> فعلی تکنولوژی
        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
        کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
      </p>
      <div class="tw-flex tw-gap-4 tw-justify-center">
        <CustomButton>دانلودِ رزومه</CustomButton>
        <CustomButton :is-transparent="true">مشاهده تجربه ها</CustomButton>
      </div>
    </div>
  </div>
</template>
