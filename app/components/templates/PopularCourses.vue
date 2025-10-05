<template>
    <ModulesSectionHeader icon-name="solar:heart-bold" icon-color="text-red-400"/>

    <ModulesCards :filter="filterPopular" class="flex gap-6 mx-5" #default="{ card }">
        <div class="flex items-center gap-1">
            <span class="text-xl font-bold">{{ card.price.toLocaleString('fa-IR') }}</span>
            <span class="text-sm text-gray-400">تومان</span>
        </div>
    </ModulesCards>
</template>

<script setup lang="ts">
import type { Card } from '@/utils/cards'

const filterPopular = (course: Card) => course.discount !== 0 && course.discount !== 100
</script>