<script setup lang="ts">
import ExpTopPart from "../components/ExperiencesPage/ExpTopPart.vue";
import JobCard from "../components/ExperiencesPage/JobCard.vue";

const jobs = [
  {
    jobTitle: "برنامه نویس فرانت اند",
    startDate: "دی 1403",
    endDate: "الان",
    companyName: "دایرکتم",
    jobType: "تمام وقت",
    address: "مرداویج",
    city: "اصفهان",
    desc: "بعد از گذروندن دوره ی کارآموزی، وارد کار اصلی شدم و قرار داد با من امضا شد. شروع کردم به کار روی زیرساخت های اصلی شرکت و نگهداری اون ها و ساخت پروژه های جدید. توی دایرکتم کار طبق سیستم اسکرام رو یاد گرفتم، با تیم بک اند به صورت مداوم در ارتباط بودم و با کمک بچه های اونجا سعی کردم دانش فنیم رو با یادگیری مباحث مختلف ارتقا بدم. اونجا روی پنل کاربران دایرکتم کار کردم، سی آر ام رو تکمیل کردم و دو تا پروژه جدید رو از صفر زدم که چون هنوز پابلیش نشدن نمیتونم راجبشون حرف بزنم، ولی خب تجربه خیلی خوبی بود. از همشون ممنونم و براشون آرزوی موفقیت میکنم:)",
  },
  {
    jobTitle: "کارآموز برنامه نویسی فول استک",
    startDate: "آذر 1403",
    endDate: "دی 1403",
    companyName: "دایرکتم",
    address: "مرداویج",
    jobType: "تمام وقت",
    city: "اصفهان",
    desc: "این اولین موقعیت شغلی من بود که توی اون با آدم های زیادی آشنا شدم و تکنولوژی های مختلف رو به صورت عملی امتحان کردم. توی اون تایم وظیفه نگهداری بخش هایی از فرانت شرکت با من بود و پروژه های کوچکی رو با لاراول در کنارش جلو میبردم، ولی بعد از یه مدت متوجه شدم که علاقه ای به لاراول ندارم و چسبیدم به ویو و فرانت. توی اون تایم شروع کردم به نوشتن سی آر امِ اختصاصیشون که هنوز هم داره ازش توی شرکت توسط چندین نفر استفاده میشه.",
  },
];
</script>

<template>
  <ExpTopPart />

  <div class="tw-flex tw-flex-col tw-gap-6">
    <JobCard
      v-for="(job, index) in jobs"
      :key="index"
      :job="job"
      class="tw-z-10"
    />
  </div>
</template>
