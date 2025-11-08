<template>
    <div class="mt-14 bg-gray-50 rounded-b-lg border border-gray-200 shadow-lg w-[46rem] dark:bg-gray-900 dark:border-gray-800 dark:text-white">
        <div v-for="menu in menuList" :key="menu.id" class="flex items-center justify-between relative h-full">
            <!-- main menu -->
            <div class="flex items-center w-1/2 bg-white dark:bg-gray-800">
                <div :class="['flex items-center justify-between p-4 w-full cursor-pointer duration-200',
                    isSelected === menu.id ? 'bg-teal-50 text-teal-500 font-font-medium border-l-2 border-l-teal-500 hover:bg-teal-50 dark:bg-teal-800 dark:text-teal-50 dark:hover:bg-teal-800' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                ]" @click="isSelected = menu.id">
                    <div class="flex items-center gap-2">
                        <Icon class="text-xl" :name="menu.icon_name" />
                        <span class="text-sm">{{ menu.title }}</span>
                    </div>
                    <Icon class="text-lg" name="solar:alt-arrow-left-outline" />
                </div>
            </div>
        </div>
        <!-- sub menu -->
        <div class="flex flex-col gap-8 p-4 absolute rounded-b-lg left-0 top-0 w-1/2" v-for="items in menuList" :key="items.id">
            <div class="flex flex-col gap-7" v-if="isSelected === items.id">
                <div class="flex items-center justify-between text-teal-500">
                    <span class="text-sm">همه آموزش‌های {{ items.title }}</span>
                    <Icon name="solar:arrow-left-broken" />
                </div>
                <div v-for="(item, index) in items.items" :key="index">
                    <span class="text-sm hover:text-teal-500 cursor-pointer duration-200">{{ item }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import menu from "@/utils/categories"

const menuList = ref(menu)
const isSelected = ref<number>(1)
</script>