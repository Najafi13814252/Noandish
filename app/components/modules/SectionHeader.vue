<template>
    <div class="flex items-center justify-between mx-5">
        <div class="flex gap-12">
            <div class="relative bottom-3 rotate-6">
                <Icon class="absolute text-[#9AC1C3] text-5xl" name="solar:lightbulb-line-duotone" />
                <Icon :class="['absolute text-orange-400 text-xl right-[.88rem] top-2', iconColor]" :name="iconName" />
            </div>
            <p class="flex items-center text-4xl font-lalezar text-main-100">دوره‌های رایگان</p>
        </div>

        <div class="flex items-center gap-1 border border-main-100 text-main-100 px-2 py-1 rounded-lg">
            <button class="cursor-pointer">همه دوره‌ها</button>
            <Icon class="text-xl" name="solar:arrow-left-up-bold-duotone" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    iconName: string
    iconColor: string
}>()
</script>