<template>
    <div class="border border-gray-200 bg-white p-4 rounded-lg text-gray-800 dark:bg-darkMode dark:text-white dark:border-gray-800">
        <div class="flex gap-10">
            <img class="w-48 h-48 rounded-full object-cover" src="/images/person.webp" alt="teacher_profile">
            <div class="flex flex-col gap-4">
                <span class="text-2xl text-main-100 font-bold dark:text-white">امیر رحمانی</span>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-2" v-for="item in detail" :key="item.id">
                        <Icon :name="item.icon_name" />
                        <span>{{ item.title }}</span>
                    </div>
                </div>
                <p class=" text-gray-600 dark:text-gray-300">اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به برنامه‌نویسی علاقمند شدم و الان
                    بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های پروژه‌های مختلفم.
                </p>
                <ul class="flex items-center gap-4">
                    <li class="flex items-center p-3 rounded-full border border-gray-300 dark:border-main-200">
                        <Icon class="text-lg text-main-100 dark:text-white" name="flowbite:facebook-solid" />
                    </li>
                    <li class="flex items-center p-3 rounded-full border border-gray-300 dark:border-main-200">
                        <Icon class="text-lg text-main-100 dark:text-white" name="flowbite:x-solid" />
                    </li>
                    <li class="flex items-center p-3 rounded-full border border-gray-300 dark:border-main-200">
                        <Icon class="text-lg text-main-100 dark:text-white" name="flowbite:instagram-solid" />
                    </li>
                    <li class="flex items-center p-3 rounded-full border border-gray-300 dark:border-main-200">
                        <Icon class="text-lg text-main-100 dark:text-white" name="flowbite:linkedin-solid" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const detail = ref([
    { id: 1, title: '72 ویدئو', icon_name: 'solar:videocamera-outline' },
    { id: 2, title: '29 دوره', icon_name: 'solar:notebook-minimalistic-outline' },
    { id: 3, title: 'آپدیت بهمن ماه', icon_name: 'solar:chart-square-outline' }
])
</script>