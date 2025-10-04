<template>
    <nav class="flex justify-between items-center mx-10 my-5 font-dana font-medium">
        <div class="flex items-center gap-10">
            <NuxtImg src="/logo.avif" width="75" height="75" format="avif" alt="Logo" preload />

            <button class="flex items-center gap-1 text-main-100 text-lg">
                <Icon class="text-xl" name="solar:widget-2-outline" />
                دسته‌بندی‌ها
            </button>

            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <Icon name="solar:magnifer-outline" />
                </div>
                <input type="text" id="input-group-1"
                    class="bg-gray-50 border border-gray-300 font text-gray-900 text-sm rounded-lg w-full md:w-96 ps-10 p-2.5"
                    placeholder="جستجو...">
            </div>
        </div>
        <div class="flex items-center gap-4">
            <button class="p-2 text-main-100 border border-main-100 rounded-full flex cursor-pointer">
                <Icon class="text-2xl" name="solar:sun-2-outline" />
            </button>

            <button class="px-4 py-2 text-main-100 rounded-lg border border-main-100 cursor-pointer">ورود | ثبت‌نام</button>
        </div>
    </nav>
</template>