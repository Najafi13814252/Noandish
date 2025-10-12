<template>
    <div class="flex items-center justify-between mx-3 md:mx-5">
        <div class="flex gap-9 md:gap-12">
            <div class="relative bottom-1 md:bottom-3 rotate-6">
                <Icon class="absolute text-[#9AC1C3] text-4xl md:text-5xl" name="solar:lightbulb-line-duotone" />
                <Icon :class="['absolute text-sm md:text-xl right-[.70rem] md:right-[.88rem] top-2', iconColor]" :name="iconName" />
            </div>
            <p class="flex items-center text-2xl md:text-4xl font-lalezar text-main-100">دوره‌های {{ title }}</p>
        </div>

        <button class="flex items-center gap-1 border border-main-100 text-main-100 px-4 py-1 rounded-lg cursor-pointer">
            همه دوره‌ها
            <!-- <Icon class="text-xl" name="solar:arrow-left-up-bold-duotone" /> -->
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    iconName: string
    iconColor: string
}>()
</script>