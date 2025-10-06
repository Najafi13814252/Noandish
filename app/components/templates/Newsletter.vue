<template>
    <div class="w-fit mx-auto px-8 py-6 rounded-2xl shadow-lg">
        <div class="flex flex-col md:flex-row justify-evenly items-center w-full gap-6 md:gap-36">
            <div class="flex gap-2">
                <Icon class="text-main-200 text-4xl rotate-6" name="solar:lightbulb-bolt-line-duotone" />
                <span class="w-full text-center md:text-right md:w-40 text-xl text-gray-100">خبرنامه ما را برای آخرین بروزرسانی‌ها دنبال کنید</span>
            </div>

            <form class="flex flex-col w-full md:flex-row md:items-center gap-4 md:gap-2">
                <div class="flex items-center px-3 gap-2 text-gray-100 py-1 border border-gr50text-gray-100 rounded-full">
                    <Icon class="text-xl" name="solar:letter-linear" />
                    <input class="w-full md:w-72 outline-none placeholder:text-sm placeholder:text-gray-300" type="email"
                        placeholder="ایمیل خود را وارد کنید">
                </div>
                <button
                    class="w-fit mx-auto bg-teal-500 px-6 py-2 text-sm rounded-full text-white cursor-pointer hover:bg-teal-600 duration-200">هم
                    اکنون مشترک شوید</button>
            </form>
        </div>
</div></template>