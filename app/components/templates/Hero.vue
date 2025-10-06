<template>
    <div class="flex md:flex-row flex-col-reverse items-center justify-between px-2 md:px-6 rounded-lg font-dana">
        <main class="text-center md:text-right">
            <p class="md:text-5xl text-4xl text-teal-700 leading-normal font-lalezar">آموزش‌های تخصصی همراه با توسعه فردی
                برای سازمان‌ها و شرکت‌ها <br> با <span class="text-main-200">بنیاد تعالی آموزش نو اندیش</span></p>
            <p class="md:text-lg text-base font-medium max-w-lg text-gray-500 leading-relaxed my-8">بهترین و بروزترین
                آموزش‌ها با بهترین و مجرب‌ترین اساتید ایران از مبتدی تا پیشرفته، کارمند تا فریلنسر همه باهم برای پیشرفت و
                تعالی</p>

            <!-- Buttons -->
            <div class="flex gap-4 items-center justify-center md:justify-normal">
                <button
                    class="w-full md:w-fit flex items-center justify-center gap-2 text-first bg-second px-6 py-2 rounded-full text-main-100 bg-yellow-400 hover:bg-yellow-300 duration-200 cursor-pointer">
                    <Icon class="text-2xl" name="solar:lightbulb-broken" />
                    <span class="text-lg font-medium cursor-pointer">شروع کنید</span>
                </button>
                <button
                    class="w-full md:w-fit flex items-center justify-center gap-2 text-white bg-first px-6 py-2 rounded-full bg-main-100 hover:bg-teal-600 duration-200 cursor-pointer">
                    <Icon class="text-2xl" name="solar:notebook-minimalistic-linear" />
                    <span class="text-lg font-medium cursor-pointer">دوره‌های ما</span>
                </button>
            </div>
        </main>

        <NuxtImg src="/hero.avif" width="860" height="860" alt="Hero" preload/>
    </div>
</template>