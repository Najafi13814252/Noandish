<template>
    <div class="flex flex-col">
        <SectionHeader title="تخفیفی" icon-name="solar:sale-bold" icon-color="text-blue-400" />

        <Card :filter="filterDiscount" class="flex gap-6" #default="{ card }">
            <div class="flex justify-between items-center gap-4 w-full">
                <div class="flex items-center gap-2">
                    <span class="bg-red-500 text-white px-2 font-semibold rounded">{{ card.discount.toLocaleString('fa-IR') }}%</span>
                    <span class="line-through text-sm text-gray-400 self-end">{{ card.price.toLocaleString('fa-IR') }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <span class="text-xl font-bold">{{ (card.price - (card.price * (card.discount / 100))).toLocaleString('fa-IR')
                    }}</span>
                    <span class="text-sm text-gray-400">تومان</span>
                </div>
            </div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import type { Card } from '@/utils/cards'

const filterDiscount = (course: Card) => course.discount !== 0 && course.discount !== 100
</script>