<template>
    <section class="flex flex-col justify-center gap-10 text-gray-800 bg-teal-50 w-full py-10 rounded-xl px-2">
        <div class="flex flex-col items-center gap-2">
            <span class="font-lalezar text-main-100 text-3xl">دسته‌بندی‌های برتر</span>
            <p class="text-lg text-gray-500 text-center">در چه زمینه‌ای میخواهید آموزش ببینید؟</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-10">
            <div class="flex items-center gap-4 bg-white border border-gray-300 rounded-lg p-2 group cursor-pointer hover:scale-110 hover:border-main-100 hover:shadow-lg duration-200" v-for="category in categories" :key="category.id">
                <div class="bg-gray-100 flex items-center p-4 rounded-full group-hover:bg-main-100">
                    <Icon class="text-3xl text-main-100 group-hover:text-white" :name="category.icon_name" />
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium group-hover:text-main-100">{{ category.title }}</span>
                    <p class="text-gray-500 text-xs">{{ category.course_number.toLocaleString('fa-IR') }}+ دوره</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

interface Categories {
    id: number
    title: string
    icon_name: string
    course_number: number
}

const categories = ref<Categories[]>([
    { id: 1, title: 'مدیریت حرفه‌ای', icon_name: 'solar:case-round-outline', course_number: 109 },
    { id: 2, title: 'توسعه فردی', icon_name: 'solar:course-up-outline', course_number: 86 },
    { id: 3, title: 'مهارت‌های نرم', icon_name: 'solar:users-group-two-rounded-outline', course_number: 45 },
    { id: 4, title: 'آموزش‌های دیجیتال و فناوری', icon_name: 'solar:laptop-linear', course_number: 34 },
    { id: 5, title: 'بازاریابی، فروش و مشتری‌مداری', icon_name: 'solar:shop-2-outline', course_number: 29 },
    { id: 6, title: 'مالی و حسابداری', icon_name: 'solar:banknote-2-outline', course_number: 48 },
    { id: 7, title: 'برنامه‌نویسی', icon_name: 'solar:code-2-bold', course_number: 39 },
    { id: 8, title: 'ارتباط موثر', icon_name: 'solar:dialog-outline', course_number: 57 }
])
</script>