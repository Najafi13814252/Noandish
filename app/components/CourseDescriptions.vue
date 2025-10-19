<template>
    <div class="flex flex-col-reverse md:flex-row justify-beetween gap-10 md:gap-20">
        <div class="flex flex-col gap-8">
            <h2 class="text-4xl font-bold dark:text-white">{{ title }}</h2>

            <p class="line-clamp-3 dark:text-gray-100">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            
            <div class="flex flex-col md:flex-row items-start md:items-center gap-9">
                <div class="flex gap-2">
                    <Icon class="text-2xl text-yellow-500" name="solar:star-bold"/>
                    <span class="text-2xl dark:text-white"><span class="text-lg text-gray-500 dark:text-gray-300">5 /</span> 4.8</span>
                </div>
                <div class="flex gap-2">
                    <Icon class="text-2xl text-sky-600" name="solar:users-group-two-rounded-outline"/>
                    <span class="text-xl dark:text-white">169 <span class="text-sm text-gray-500 dark:text-gray-300">دانشجو</span></span>
                </div>
                
                <div class="flex gap-2">
                    <Icon class="text-xl text-pink-600" name="solar:chart-2-outline"/>
                    <span class="text-sm dark:text-white">مقدماتی تا پیشرفته</span>
                </div>
            </div>

            <div class="flex items-center gap-8">
                <div class="flex items-center gap-2">
                    <img class="w-9 h-9 object-cover rounded-full" src="/images/person.webp" alt="teacher">
                    <span class="dark:text-white">رضا مردانی</span>
                </div>
                <div class="flex items-center gap-2 dark:text-white">
                    <Icon class="text-xl" name="solar:danger-outline"/>
                    <span>آخرین بروزرسانی: 1403/02/10</span>
                </div>
            </div>
        </div>

        <video class="w-[480px] h-full rounded-md object-cover" poster="/images/img-1.webp" controls>
            <source src="/videoTest.mp4">
        </video>
    </div>
</template>

<script setup>

const title = useRoute().params.title

</script>