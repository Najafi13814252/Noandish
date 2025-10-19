<template>
    <div class="text-gray-800 font-medium sticky top-24">
        <div class="border border-gray-300 bg-white rounded-lg w-full md:w-[22rem] shadow-md dark:bg-gray-800 dark:border-gray-700">
            <!-- price and description -->
            <div class="flex justify-between items-center gap-4 p-4">
                <div class="flex items-center gap-2">
                    <span class="bg-rose-500 text-white px-2 font-semibold rounded">50%</span>
                    <span class="line-through text-sm text-gray-400 self-end">2,400,000</span>
                </div>
                <div class="flex items-center gap-1">
                    <span class="text-2xl font-bold dark:text-white">1,200,000</span>
                    <span class="text-sm text-gray-400">تومان</span>
                </div>
            </div>

            <!-- Buy & Save -->
            <div class="flex justify-between gap-2 px-2 pt-2 pb-4">
                <button
                    class="flex items-center gap-2 bg-sky-500 text-white py-2 px-[3.3rem] rounded-md cursor-pointer hover:bg-sky-600 duration-200">
                    <Icon class="text-2xl" name="solar:cart-large-bold" />
                    <span class="font-medium text-lg">افزودن به سبد خرید</span>
                </button>
                <button
                    class="flex items-center p-3 rounded-md bg-sky-50 border border-sky-500 text-sky-500 cursor-pointer hover:bg-sky-100 duration-200 dark:bg-gray-800 dark:hover:bg-gray-900">
                    <Icon class="text-xl" name="solar:bookmark-line-duotone" />
                </button>
            </div>

            <!-- course features -->
            <div class="p-2 border-t border-t-gray-300 dark:border-gray-700">
                <div class="flex flex-col gap-4 p-2">
                    <div class="flex items-center justify-between" v-for="item in features" :key="item.id">
                        <div class="flex items-center gap-2">
                            <Icon class="text-gray-500" :name="item.icon_name" />
                            <span class="dark:text-white">{{ item.title_1 }}</span>
                        </div>
                        <span class="dark:text-white">{{ item.title_2 }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const features = ref([
    { id: 1, title_1: 'جلسات', title_2: '20', icon_name: 'solar:notebook-outline' },
    { id: 2, title_1: 'سطح دوره', title_2: 'مقدماتی', icon_name: 'solar:chart-square-outline' },
    { id: 3, title_1: 'پیش‌نیاز', title_2: 'دارد', icon_name: 'solar:case-linear' },
    { id: 4, title_1: 'زبان', title_2: 'فارسی', icon_name: 'solar:global-outline' },
    { id: 5, title_1: 'روش پشتیبانی', title_2: 'آنلاین', icon_name: 'solar:shield-user-outline' },
    { id: 6, title_1: 'نوع دوره', title_2: 'نقدی', icon_name: 'solar:tag-outline' }
])
</script>