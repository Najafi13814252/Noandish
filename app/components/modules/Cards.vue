<template>
    <div class="overflow-hidden scroll-smooth">
        <div v-for="card in filteredCourses" :key="card.id"
            class="flex flex-col relative shrink-0 gap-4 border bg-white w-full max-w-2xs border-teal-200 rounded-2xl shadow-md shadow-teal-200 p-3 my-4 hover:scale-105 duration-200 cursor-pointer">

            <!-- save courses -->
            <div
                class="absolute right-6 top-6 bg-white rounded-full flex items-center p-1 shadow opacity-85 hover:scale-110 duration-200">
                <Icon class="text-xl text-first" name="solar:bookmark-line-duotone" />
            </div>

            <!-- image of course -->
            <NuxtImg :src="card.src" alt="Course" width="400" height="250" format="avif" quality="75"
                sizes="(max-width: 640px) 100vw, 400px" class="w-full h-40 object-cover rounded-lg border border-gray-200"
                loading="lazy" />

            <div class="flex flex-col gap-7">
                <!-- title of course-->
                <span class="text-lg font-bold text-gray-800">{{ card.title }}</span>

                <!-- details of course -->
                <div class="flex gap-5 text-gray-500 text-sm font-medium h-2">
                    <div class="flex items-center gap-2 whitespace-nowrap">
                        <Icon class="text-sky-500 text-base" name="solar:notebook-minimalistic-outline" />
                        <span>{{ card.lesson.toLocaleString('fa-IR') }} درس</span>
                    </div>
                    <div class="flex items-center gap-2 whitespace-nowrap">
                        <Icon class="text-green-500 text-base" name="solar:square-academic-cap-outline" />
                        <span>{{ card.members.toLocaleString('fa-IR') }} دانشجو</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <Icon :class="['text-pink-500', card.level === 'مقدماتی تا پیشرفته' ? 'text-3xl' : 'text-base']"
                            name="solar:chart-outline" />
                        <span class="">{{ card.level }}</span>
                    </div>
                </div>

                <!-- profile of teacher -->
                <div class="flex justify-between">
                    <!-- profile -->
                    <div class="flex items-center gap-2">
                        <!-- <img class="w-9 h-9 rounded-full" src="@/public/images/person.jpg" alt="teacher"> -->
                        <div class="flex flex-col">
                            <span class="text-gray-800 font-medium">{{ card.teacher }}</span>
                            <span class="text-teal-500 text-sm font-medium">مدرس</span>
                        </div>
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

            <hr class="text-gray-200">

            <!-- price -->
            <div class="flex justify-end items-center gap-1">
                <slot :card="card" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import cards from '@/utils/cards';
import type { Card } from '@/utils/cards'

const courses = ref<Card[]>(cards)


const props = defineProps<{
    filter?: (course: Card) => boolean
}>()

const filteredCourses = computed<Card[]>(() => {
    if (!props.filter) return courses.value
    return courses.value.filter(props.filter)
})
</script>