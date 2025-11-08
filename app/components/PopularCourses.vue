<template>
    <div class="flex flex-col">
        <SectionHeader title="محبوب" icon-name="solar:heart-bold" icon-color="text-red-500" />

        <Card :filter="filterPopular" class="flex gap-6" #default="{ card }">
            <div class="flex items-center gap-1">
                <span class="text-xl font-bold">{{ card.price.toLocaleString('fa-IR') }}</span>
                <span class="text-sm text-gray-400">تومان</span>
            </div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import type { Card } from '@/utils/cards'

const filterPopular = (course: Card) => course.discount !== 0 && course.discount !== 100
</script>