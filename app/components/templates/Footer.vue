<template>
    <div class="mt-16 w-fit mx-4 md:pr-20">
        <div class="flex flex-col md:flex-row gap-16 md:gap-36 items-center text-gray-100">
            <!-- introduction -->
            <div class="flex flex-col gap-6">
                <div class="flex items-center gap-2">
                    <NuxtImg src="/logo.avif" width="75" height="75" class="rounded-2xl w-14" format="avif" alt="Logo" />
                    <span class="text-2xl font-lalezar text-main-200">بنیاد نواندیش</span>
                </div>
                <p class="w-full md:w-80">بنیاد تعالی آموزشی نواندیش با هدف ارتقاء دانش و مهارت‌های تخصصی در سازمان‌ها و شرکت‌ها، با
                    بهره‌گیری از اساتید
                    مجرب و محتوای به‌روز، بستری حرفه‌ای برای آموزش و توسعه منابع انسانی فراهم کرده است.
                    ما همراه شما هستیم در مسیر رشد، یادگیری و تعالی سازمانی.
                </p>
                <div class="flex items-center gap-4">
                    <div class="flex items-center p-2 rounded-full bg-gray-200 cursor-pointer hover:scale-125 duration-200"
                        v-for="app in links.apps" :key="app.id">
                        <Icon class="text-main-100 text-xl" v-if="app.icon_name" :name="app.icon_name" />
                    </div>
                </div>
            </div>

            <ul class="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-40 w-full">
                <!-- quick links -->
                <li class="flex flex-col gap-1">
                    <span class="mb-3">لینک‌های سریع</span>
                    <ul class="flex items-center gap-2 cursor-pointer hover:text-main-200 duration-200"
                        v-for="qu in links.quick" :key="qu.id">
                        <Icon name="solar:arrow-left-bold-duotone" />
                        <span>{{ qu.title }}</span>
                    </ul>
                </li>

                <!-- useful links -->
                <li class="flex flex-col gap-1">
                    <span class="mb-3">لینک‌های کاربردی</span>
                    <ul class="flex items-center gap-2 cursor-pointer hover:text-main-200 duration-200"
                        v-for="use in links.useful" :key="use.id">
                        <Icon name="solar:arrow-left-bold-duotone" />
                        <span>{{ use.title }}</span>
                    </ul>
                </li>

                <!-- concat us -->
                <li class="flex flex-col gap-3">
                    <span class="mb-3">ارتباط با ما</span>
                    <ul class="flex items-center gap-2" v-for="us in links.concat" :key="us.id">
                        <Icon v-if="us.icon_name" :name="us.icon_name" />
                        <span>{{ us.title }}</span>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const links = ref({
    quick: [
        { id: 1, title: 'صفحه اصلی' },
        { id: 2, title: 'درباره ما' },
        { id: 3, title: 'دوره‌های پیشنهادی' },
        { id: 4, title: 'مدرسین' }
    ],
    useful: [
        { id: 1, title: 'ارتباط با ما' },
        { id: 2, title: 'دوره‌ها' },
        { id: 3, title: 'دروس' },
        { id: 4, title: 'ایجاد حساب کاربری' }
    ],
    concat: [
        { id: 1, title: 'Noandish@gmail.com', icon_name: 'solar:letter-opened-outline' },
        { id: 2, title: '4567 123 9812+', icon_name: 'solar:phone-calling-outline' },
        { id: 3, title: 'ایران', icon_name: 'solar:map-point-outline' }
    ],
    apps: [
        { id: 1, icon_name: 'akar-icons:instagram-fill' },
        { id: 2, icon_name: 'akar-icons:linkedinv2-fill' },
        { id: 3, icon_name: 'akar-icons:x-fill' },
        { id: 4, icon_name: 'akar-icons:whatsapp-fill' }
    ]
})
</script>