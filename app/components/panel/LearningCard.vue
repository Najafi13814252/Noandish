<template>
    <div class="grid grid-cols-4 gap-6 w-full">
        <div class="border border-gray-300 rounded-lg p-2 flex flex-col gap-3 bg-white hover:scale-105 duration-200 dark:bg-darkMode dark:border-gray-700" v-for="course in myCourses"
            :key="course.id">
            <NuxtLink :to="`/courses/${course.title}`">
                <NuxtImg :src="course.image" alt="Course" width="400" height="250" format="webp" quality="75"
                    sizes="(max-width: 640px) 100vw, 400px"
                    class="w-full h-40 object-cover rounded-lg border border-gray-200" loading="lazy" />
            </NuxtLink>

            <!-- course title -->
            <span class="text-xl font-medium dark:text-white">{{ course.title }}</span>

            <!-- teacher name -->
            <span class="text-sm text-gray-500 dark:text-gray-400">مدرس: {{ course.teacherName }}</span>

            <!-- progress bar -->
            <div class="flex flex-col gap-1">
                <div class="flex justify-between items-center">
                    <span class="font-medium text-teal-500">{{course.progress.toLocaleString("fa-IR") }}%</span>  
                    <span class="text-gray-700 text-sm dark:text-gray-500">پیشرفت</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-800">
                    <div class="bg-teal-500 h-2 rounded-full dark:bg-teal-600" :style="{ width: course.progress + '%' }"></div>
                </div>
            </div>

            <div class="flex items-center justify-between mt-2">
                <button class="bg-teal-600 px-6.5 py-2 text-white text-sm rounded-md flex items-center gap-2 hover:bg-teal-700 duration-200 cursor-pointer">
                    ادامه دوره
                    <Icon class="text-lg" name="solar:arrow-left-broken"/>
                </button>
                <button class="border border-teal-600 px-8 py-2 text-teal-600 rounded-md text-sm hover:bg-teal-100 duration-200 cursor-pointer dark:hover:bg-gray-800">ثبت نظر</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type MyCourse = {
    id: number
    image: string
    title: string
    teacherName: string
    progress: number
}

const myCourses = ref<MyCourse[]>([
    { id: 1, image: '/images/img-1.webp', title: 'توسعه فردی', teacherName: 'علی احمدی', progress: 30 },
    { id: 2, image: '/images/img-3.webp', title: 'مدیریت حرفه‌ای', teacherName: 'رضا عباسی', progress: 55 },
    { id: 3, image: '/images/img-6.webp', title: 'هنر مذاکره', teacherName: 'سهیل امیری', progress: 72 },
    { id: 4, image: '/images/img-5.webp', title: 'تفکر استراتژیک', teacherName: 'سارا رضایی', progress: 40 },
    { id: 5, image: '/images/img-2.webp', title: 'تفکر استراتژیک', teacherName: 'سارا رضایی', progress: 40 },
    { id: 6, image: '/images/img-3.webp', title: 'تفکر استراتژیک', teacherName: 'سارا رضایی', progress: 40 },
    { id: 7, image: '/images/img-1.webp', title: 'تفکر استراتژیک', teacherName: 'سارا رضایی', progress: 40 }
])
</script>