<template>
    <div class="relative mx-3 md:mx-5">
        <ClientOnly>
            <swiper-container class="overflow-hidden h-full" ref="containerRef" :slides-per-view="4.6" :space-between="20"
                :slides-per-group="1" :breakpoints="{
                    0: { slidesPerView: 1.1 },       // موبایل
                    640: { slidesPerView: 4.6 }    // از 640px به بالا
                }">
                <swiper-slide v-for="card in filteredCourses" :key="card.id"
                    class="flex flex-col relative shrink-0 gap-4 border bg-white w-full h-full border-teal-200 rounded-2xl shadow-md shadow-teal-200 p-3 my-4 cursor-pointer transform transition-transform duration-200 hover:scale-105 dark:bg-gray-800 dark:border-teal-700 dark:shadow-teal-700">

                    <!-- save courses -->
                    <div
                        class="absolute right-6 top-6 bg-white rounded-full flex items-center p-1 shadow opacity-85 hover:scale-110 duration-200">
                        <Icon class="text-xl text-main-100" name="solar:bookmark-line-duotone" />
                    </div>

                    <!-- image of course -->
                    <NuxtLink :to="`/courses/${card.title}`">
                        <NuxtImg :src="card.src" alt="Course" width="400" height="250" format="webp" quality="75"
                        sizes="(max-width: 640px) 100vw, 400px"
                        class="w-full h-40 object-cover rounded-lg border border-gray-200" loading="lazy" />
                    </NuxtLink>

                    <div class="flex flex-col gap-7">
                        <!-- title of course-->
                        <NuxtLink :to="`/courses/${card.title}`">
                            <span class="text-lg font-bold text-gray-800 dark:text-white">{{ card.title }}</span>
                        </NuxtLink>

                        <!-- details of course -->
                        <div class="flex gap-5 text-gray-500 text-sm font-medium h-2">
                            <div class="flex items-center gap-2 whitespace-nowrap dark:text-gray-50">
                                <Icon class="text-sky-500 text-base" name="solar:notebook-minimalistic-outline" />
                                <span>{{ card.lesson.toLocaleString('fa-IR') }} درس</span>
                            </div>
                            <div class="flex items-center gap-2 whitespace-nowrap dark:text-gray-50">
                                <Icon class="text-green-500 text-base" name="solar:square-academic-cap-outline" />
                                <span>{{ card.members.toLocaleString('fa-IR') }} دانشجو</span>
                            </div>
                            <div class="flex items-center gap-2 dark:text-gray-50">
                                <Icon
                                    :class="['text-pink-500', card.level === 'مقدماتی تا پیشرفته' ? 'text-3xl' : 'text-base']"
                                    name="solar:chart-outline" />
                                <span class="">{{ card.level }}</span>
                            </div>
                        </div>

                        <!-- profile of teacher -->
                        <div class="flex justify-between">
                            <!-- profile -->
                            <div class="flex items-center gap-1">
                                <Icon class="text-lg text-main-100 dark:text-gray-400" name="solar:user-linear"/>
                                <span class="text-sm text-gray-400">{{ card.teacher }}</span>
                            </div>

                            <!-- rate -->
                            <div class="flex items-end">
                                <div class="flex items-center gap-1 text-yellow-500">
                                    <div class="flex relative top-0.5">
                                        <span>{{ card.rate.toLocaleString('fa-IR') }}</span>
                                    </div>
                                    <div class="flex">
                                        <Icon name="solar:star-bold" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="text-gray-200 dark:text-gray-700">

                    <!-- price -->
                    <div class="flex justify-end items-center gap-1 dark:text-white">
                        <slot :card="card" />
                    </div>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>

        <div class="hidden md:flex items-center gap-2 absolute bottom-full left-32">
            <button class="flex p-2 rounded-full border border-main-100 text-main-100 cursor-pointer dark:text-main-200 dark:border-main-200" aria-label="prev_btn"
                @click="swiper.prev()">
                <Icon class="text-xl" name="solar:alt-arrow-right-outline" />
            </button>
            <button class="flex p-2 rounded-full border border-main-100 text-main-100 cursor-pointer dark:text-main-200 dark:border-main-200" aria-label="next_btn"
                @click="swiper.next()">
                <Icon class="text-xl" name="solar:alt-arrow-left-outline" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import cards from '@/utils/cards';
import type { Card } from '@/utils/cards'

const courses = ref<Card[]>(cards)
const containerRef = ref(null)

const swiper = useSwiper(containerRef)


const props = defineProps<{
    filter?: (course: Card) => boolean
}>()

const filteredCourses = computed<Card[]>(() => {
    if (!props.filter) return courses.value
    return courses.value.filter(props.filter)
})
</script>