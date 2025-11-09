<template>
    <div class="flex flex-col gap-10">
        <h2 class="text-2xl dark:text-white">دوره‌های من (8 دوره)</h2>

        <div class="flex items-center justify-between gap-4">
            <!-- search box -->
            <div class="flex items-center justify-between bg-white border border-gray-300 w-full rounded-lg dark:bg-darkMode dark:border-gray-700">
                <input class="px-2 py-3 w-full focus:outline-none dark:placeholder:text-gray-200 dark:text-white" type="text" placeholder="جستجو در دوره‌های من...">
                <Icon class="text-xl pl-10 text-gray-500" name="solar:magnifer-outline" />
            </div>

            <!-- filter -->
            <div class="flex items-center gap-4" v-for="filter in filters" :key="filter.id">
                <div class="relative">
                    <!-- button -->
                    <div class="flex items-center justify-between px-3 py-3 w-52 border border-gray-300 rounded-lg cursor-pointer bg-white hover:border-gray-400 transition dark:bg-darkMode dark:text-gray-200 dark:border-gray-700"
                        @click="openFilter = openFilter === filter.id ? null : filter.id">
                        <div class="flex items-center gap-2">
                            <Icon class="text-xl text-gray-500" :name="filter.icon" />
                            <span>{{ filter.option }}</span>
                        </div>
                        <Icon class="text-xl transition-transform duration-300" name="solar:alt-arrow-down-outline"
                            :class="{ 'rotate-180': openFilter === filter.id }" />
                    </div>

                    <!-- dropdown -->
                    <transition
                        enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0 -translate-y-2"
                        enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition ease-in duration-150"
                        leave-from-class="opacity-100 translate-y-0"
                        leave-to-class="opacity-0 -translate-y-2">
                        
                        <div v-if="openFilter === filter.id"
                            class="absolute top-full right-0 bg-white border border-gray-200 rounded-md shadow-md mt-1 z-20 w-full dark:bg-darkMode dark:border-gray-700">
                            <div v-for="(option, index) in filter.subOption" :key="index"
                                class="px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800" @click="openFilter = null">
                                {{ option.title }}
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>

        <!-- courses -->
        <PanelLearningCard />
    </div>
</template>

<script setup>
const openFilter = ref(null)
const filters = ref([
    {
        id: 1,
        option: 'نوع دوره',
        icon: 'solar:filter-outline',
        subOption: [
            { title: 'رایگان', value: 'free' },
            { title: 'نقدی', value: 'cash' }
        ]
    },
    {
        id: 2,
        option: 'وضعیت',
        icon: 'solar:align-right-outline',
        subOption: [
            { title: 'شروع نشده', value: 'no-started' },
            { title: 'درحال یادگیری', value: 'learning' },
            { title: 'تمام شده', value: 'finish' }
        ]
    }
])
</script>