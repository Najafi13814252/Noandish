<template>
    <div class="flex flex-col">
        <SectionHeader title="رایگان" icon-name="solar:fire-bold" icon-color="text-orange-400" />

        <Card :filter="filterFree" class="flex gap-6" #default="{ card }">
            <div class="flex flex-row-reverse justify-between gap-2 items-center w-full">
                <span class="text-teal-500 font-bold text-xl">رایگان!</span>
                <span class="flex items-center text-sm text-gray-400 line-through">{{ card.price.toLocaleString('fa-IR') }} تومان</span>
            </div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import type { Card } from '@/utils/cards'

const filterFree = (course: Card) => course.discount === 100
</script>