<template>
    <div class="flex flex-col gap-6 text-gray-800">
        <div class="flex flex-col gap-4 border border-gray-200 bg-white px-4 py-6 rounded-lg dark:bg-darkMode dark:text-white dark:border-gray-800">
            <!-- descriptons -->
            <div class="flex items-center gap-2">
                <Icon class="text-4xl text-yellow-500" name="solar:file-text-line-duotone"/>
                <span class="text-2xl font-bold">توضیحات</span>
            </div>
            <div class="flex flex-col gap-4">
                <p>طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                    داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <p>از آنجایی که گنجاندن امکانات بیشتر باعث سنگین‌تر شدن آن می‌شود، و از طرف دیگر همه کاربران وردپرس به آن
                    نیازی ندارند، این افزونه‌های وردپرس هستند که کار توسعه امکانات وردپرس را به عهده دارند. در ادامه مطلب با
                    آکادمی لرن آپ مرجع آموزش برنامه نویسی همراه باشید. اگر علاقمند به کسب اطلاعات بیشتر درباره وردپرس هستید
                    پیشنهاد میکنیم به سایت رسمی وردپرس مراجعه نمایید.
                </p>
            </div>

            <!-- prerequisites -->
            <div class="flex flex-col gap-2">
                <span class="text-xl">پیشنیازهای دوره</span>
                <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-1" v-for="check in prerequisites" :key="check.id">
                        <Icon class="text-lg text-sky-500" name="solar:check-read-outline" />
                        <span class="font-medium">{{ check.title }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- questions -->
        <div class="flex flex-col gap-4 border border-gray-200 bg-white px-4 py-6 rounded-lg dark:bg-darkMode dark:text-white dark:border-gray-800">
            <span class="text-2xl font-bold rounded-md">سوالات متداول</span>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-12 md: gap-3">
                <div v-for="question in questions" :key="question.id">
                    <span class="cursor-pointer">{{ question.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const prerequisites = ref([
    { id: 1, title: 'دوره تصویری آموزش HTML به زبان فارسی' },
    { id: 2, title: 'دوره تصویری آموزش PHP به زبان فارسی' },
    { id: 3, title: 'آشنایی نسبی با MySQL' }
])

const questions = ref([
    { id: 1, title: 'کار با دیتابیس' },
    { id: 2, title: 'نوشتن تگ‌های HTML' },
    { id: 3, title: 'چگونه PHP را در پروژه استفاده کنیم' },
    { id: 4, title: 'نحوه کار با XAMPP' },
    { id: 5, title: 'استفاده از JS در پروژه' },
    { id: 6, title: 'چگونه پروژه را اجرا کنیم' }
])
</script>