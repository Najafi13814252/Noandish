<template>
    <div class="border border-gray-200 bg-white p-4 rounded-lg flex flex-col gap-6 text-gray-800 dark:bg-darkMode dark:text-white dark:border-gray-800">
        <div class="flex items-center gap-2">
            <Icon class="text-4xl text-sky-500" name="solar:square-academic-cap-line-duotone" />
            <span class="text-2xl font-bold">سرفصل‌ها</span>
        </div>

        <div class="flex flex-col gap-6">
            <!-- course box -->
            <div class="border border-gray-200 p-4 rounded-md dark:border-gray-700" v-for="(item, index) in filters"
                :key="index">
                <!-- main title course -->
                <div class="flex items-center justify-between cursor-pointer text-lg" @click="toggle(index)">
                    <div class="flex items-center gap-2">
                        <span>فصل {{ index + 1 }}.</span>
                        <span>{{ item.title }}</span>
                    </div>
                    <Icon class="text-xl" v-if="openIndex === index" name="solar:alt-arrow-up-outline" />
                    <Icon class="text-xl" v-else name="solar:alt-arrow-down-outline" />
                </div>

                <!-- detail course -->
                <div class="my-8 flex flex-col gap-6" v-if="openIndex === index">
                    <div class="flex items-center justify-between p-4 rounded-lg shadow cursor-pointer hover:bg-gray-50 duration-200 dark:bg-gray-700 dark:hover:bg-gray-800"
                        v-for="(option, index) in item.options" :key="index">
                        <div class="flex items-center gap-2">
                            <div class="flex items-center gap-2">
                                <Icon class="relative bottom-0.5" name="solar:play-outline" />
                                <span>جلسه {{ index + 1 }}.</span>
                            </div>
                            <div>{{ option.title }}</div>
                        </div>
                        <div class="flex items-center bg-green-100 p-2 rounded-full dark:bg-gray-600"
                            v-if="option.type === 'public'">
                            <Icon class="text-green-500 text-xl" name="solar:eye-outline" />
                        </div>
                        <div class="flex items-center bg-fuchsia-100 p-2 rounded-full dark:bg-gray-600" v-else>
                            <Icon class="text-fuchsia-500 text-xl" name="solar:lock-keyhole-minimalistic-outline" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const openIndex = ref(null)

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index
}

const filters = [
    {
        title: 'مقدمه و معرفی مدرس',
        options: [
            { title: 'معرفی دوره', type: 'public' },
            { title: 'ساخت منوها در بخش مدیریت', type: 'public' },
            { title: 'متاباکس و ذخیره اطلاعات برای پست‌ها', type: 'public' },
            { title: 'استفاده از قالب استاندارد در پلاگین‌ها', type: 'private' },
            { title: 'ذخیره و بازیابی تنظیمات در وردپرس', type: 'private' }
        ]
    },
    {
        title: 'پیاده‌سازی پلاگین آمار بازدید',
        options: [
            { title: 'معرفی دوره', type: 'public' },
            { title: 'ساخت منوها در بخش مدیریت', type: 'public' },
            { title: 'متاباکس و ذخیره اطلاعات برای پست‌ها', type: 'public' },
            { title: 'استفاده از قالب استاندارد در پلاگین‌ها', type: 'private' },
            { title: 'ذخیره و بازیابی تنظیمات در وردپرس', type: 'private' }
        ]
    },
    {
        title: 'پیاده‌سازی پلاگین رای دادن به مطالب',
        options: [
            { title: 'معرفی دوره', type: 'public' },
            { title: 'ساخت منوها در بخش مدیریت', type: 'public' },
            { title: 'متاباکس و ذخیره اطلاعات برای پست‌ها', type: 'public' },
            { title: 'استفاده از قالب استاندارد در پلاگین‌ها', type: 'private' },
            { title: 'ذخیره و بازیابی تنظیمات در وردپرس', type: 'private' }
        ]
    },
    {
        title: 'پیاده‌سازی پلاگین فروشگاه اینترنتی با درگاه پرداخت',
        options: [
            { title: 'معرفی دوره', type: 'public' },
            { title: 'ساخت منوها در بخش مدیریت', type: 'public' },
            { title: 'متاباکس و ذخیره اطلاعات برای پست‌ها', type: 'public' },
            { title: 'استفاده از قالب استاندارد در پلاگین‌ها', type: 'private' },
            { title: 'ذخیره و بازیابی تنظیمات در وردپرس', type: 'private' }
        ]
    },
]
</script>