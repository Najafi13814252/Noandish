<template>
    <nav
        class="flex justify-between items-center border-b border-b-gray-300/20 md:px-10 px-2 py-1 bg-white/50 backdrop-blur-lg z-40 font-dana font-medium sticky top-0 dark:bg-darkMode/50 dark:border-gray-800/50">
        <div class="flex items-center gap-1 md:gap-10">
            <!-- Logo -->
            <NuxtLink to="/">
                <NuxtImg src="/logo.avif" width="75" height="75" format="avif" alt="Logo" preload />
            </NuxtLink>

            <!-- Category -->
            <button class="hidden md:flex items-center gap-1 text-main-100 text-lg dark:text-main-200">
                <Icon class="text-xl" name="solar:widget-2-outline" />
                دسته‌بندی‌ها
            </button>

            <!-- Search Box -->
            <div class="hidden md:block relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 ">
                    <Icon class="text-lg dark:text-main-200" name="solar:magnifer-outline" />
                </div>
                <input type="text" id="input-group-1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-[30rem] ps-10 p-3 dark:bg-transparent dark:border-gray-700 dark:placeholder:text-white dark:text-white"
                    placeholder="جستجو...">
            </div>
        </div>
        <div class="flex items-center gap-4">
            <!-- System Mode -->
            <button
                class="p-2 text-main-100 border border-main-100 rounded-full flex cursor-pointer dark:text-main-200 dark:border-main-200"
                aria-label="color_mode" @click="toggleMode">
                <Icon class="text-2xl" :name="colorMode.value === 'dark' ? 'solar:sun-2-outline' : 'solar:moon-outline'" />
            </button>

            <!-- Register -->
            <button v-if="!userStore.isLoggedIn"
                class="md:block px-4 py-2 text-main-100 rounded-lg border border-main-100 cursor-pointer dark:text-main-200 dark:border-main-200"
                @click="$emit('openLogin')">ورود | ثبت‌نام</button>
            <button v-else class="flex items-center gap-2 border border-main-100 text-main-100 px-4 py-2 rounded-lg cursor-pointer dark:text-main-200 dark:border-main-200" @click="logout">
                <Icon class="text-2xl" name="solar:user-outline" />
                <span class="font-medium">پنل دانشجو</span>
            </button>
        </div>
    </nav>
</template>

<script setup>
import { useUserStore } from '~/../stores/user'

const colorMode = useColorMode()
const userStore = useUserStore()

const toggleMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const logout = async () => {
    useUserStore.logout()
}
</script>