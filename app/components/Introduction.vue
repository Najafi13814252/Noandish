<template>
    <section class="flex flex-col justify-center items-center gap-12 bg-gray-50 py-10 rounded-2xl px-2 dark:bg-teal-900">
        <span class="font-lalezar text-main-100 text-3xl dark:text-white">چرا نواندیش؟</span>

        <div class="flex flex-wrap items-center justify-center gap-12 md:gap-28">
            <div class="flex flex-col items-center text-center gap-4" v-for="intro in introduction" :key="intro.id">
                <div class="flex items-center border border-main-100 p-4 rounded-3xl dark:border-main-200">
                    <Icon class="text-4xl text-main-100 dark:text-gray-200" :name="intro.icon_name" />
                </div>
                <p class="w-40 h-20 text-gray-800 dark:text-white">{{ intro.title }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

interface Introduction {
    id: number
    title: string
    icon_name: string
}

const introduction = ref<Introduction[]>([
    { id: 1, title: 'پاسخ‌گویی به سوالات و راهنمایی توسط استاد یا منتور دوره', icon_name: 'solar:call-chat-outline' },
    { id: 2, title: 'ارائه گواهی‌نامه رسمی موسسات آموزشی', icon_name: 'solar:diploma-outline' },
    { id: 3, title: 'دوره‌های پروژه محور با حضور منتور (راهنما)', icon_name: 'solar:notebook-bookmark-outline' },
    { id: 4, title: 'امکان برقراری ارتباط با دانشجویان و پرسش سوالات در تالار گفتگو', icon_name: 'solar:dialog-outline' },
    { id: 5, title: 'تسهیل استخدام برای فارغ‌التحصیلان نواندیش', icon_name: 'solar:square-academic-cap-2-outline' }
])
</script>