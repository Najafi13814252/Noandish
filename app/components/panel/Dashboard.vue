<template>
    <aside class="border border-gray-300 rounded-2xl w-72 h-full p-4 bg-white dark:bg-darkMode dark:border-gray-700">
        <div>
            <!-- profile -->
            <div class="flex flex-col items-center gap-4 border-b border-b-gray-200 pb-4 dark:border-b-gray-800">
                <img class="w-32 h-32 rounded-full object-cover" src="/images/person.webp" alt="teacher_profile">
                <div class="flex flex-col items-center gap-2 dark:text-white">
                    <span>امیرحسین نجفی</span>
                    <span class="text-gray-500">09374826032</span>
                </div>
            </div>

            <!-- menu -->
            <div v-for="menu in panel" :key="menu.id" class="py-2">
                <NuxtLink :to="menu.route" active-class="bg-teal-50 text-teal-500 border-r-2 border-r-teal-200 shadow-md shadow-teal-100 hover:bg-teal-50 dark:bg-gray-800 dark:border-r-teal-700 dark:shadow-teal-900 dark:shadow-sm dark:!text-teal-500"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg w-full block hover:bg-gray-100 duration-200 dark:text-white dark:hover:bg-gray-800">
                    <Icon class="text-lg" :name="menu.icon" />
                    <span>{{ menu.title }}</span>
                </NuxtLink>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
type PanelMenu = {
    id: number
    title: string
    icon: string
    route: string
}

const panel = ref<PanelMenu[]>([
    { id: 1, title: 'دوره‌های من', icon: 'solar:book-2-outline', route: '/panel/my-courses' },
    { id: 2, title: 'علاقه‌مندی‌ها', icon: 'solar:bookmark-linear', route: '/panel/favorites' },
    { id: 3, title: 'سوال‌های من', icon: 'solar:dialog-outline', route: '/panel/questions' },
    { id: 4, title: 'لیست تراکنش‌ها', icon: 'solar:wallet-money-outline', route: '/panel/transactions' },
    { id: 5, title: 'تنظیمات پروفایل', icon: 'solar:user-rounded-outline', route: '/panel/profile-settings' },
    { id: 6, title: 'خروج', icon: 'solar:logout-outline', route: '/panel/exit' }
])
</script>