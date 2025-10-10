<template>
    <div class="flex flex-col">
        <ModulesSectionHeader title="رایگان" icon-name="solar:fire-bold" icon-color="text-orange-400" />

        <ModulesCard :filter="filterFree" class="flex gap-6" #default="{ card }">
            <div class="flex flex-row-reverse justify-between gap-2 items-center w-full">
                <span class="text-teal-500 font-bold text-xl">رایگان!</span>
                <span class="flex items-center text-sm text-gray-400 line-through">{{ card.price.toLocaleString('fa-IR') }} تومان</span>
            </div>
        </ModulesCard>
    </div>
</template>

<script setup lang="ts">
import type { Card } from '@/utils/cards'

const filterFree = (course: Card) => course.discount === 100
</script>